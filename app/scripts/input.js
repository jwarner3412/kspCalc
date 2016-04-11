var SnapInput = function(snapOpt) {
  this.math = {};
  this.math.calcSMA = function(alt, bodyRad) {
    var sma = (((2 * alt) + (2 * bodyRad)) / 2);
    return sma;
  };
  this.math.calcPER = function(sma, Mu) {
    var p = 2 * Math.PI * Math.sqrt(Math.pow(sma, 3) / Mu);
    return p;
  };
  this.math.calcRa = function(per, rp, Mu, mply) {
    var muu = 2 * Mu;
    var muPow = Math.pow(muu, 1 / 3);
    var perPow = Math.pow(per, 2 / 3);
    var piPow = Math.pow(Math.PI, 2 / 3);
    if (mply) {
      piPow *= mply;
    }
    var a = perPow * muPow / piPow - rp;
    return a;
  };
  this.math.parseSec = function(s, bodyT) {
    var sec = Math.floor((s % 60) * 1000) / 1000;
    var min = Math.floor((s % 3600) / 60);
    var hour = Math.floor((s % bodyT) / 3600);
    var day = Math.floor(s / bodyT);
    var time = [day, hour, min, sec];
    return time;
  };

  this.body = {};
  this.body = snapOpt[0];
  var prec = parseFloat(snapOpt[1]);
  var satCnt = parseInt(snapOpt[2], 10);
  var known = parseFloat(snapOpt[3]);
  var type = snapOpt[4];

  var rad = this.body.radiusM;
  var mu = this.body.MUms3;
  var dayS = this.body.siderealDayS;

  if (type !== 'alt') {
    known = this.math.calcRa(known, rad, mu, 2);
  }

  this.target = {};
  this.target.altM = known;
  this.target.semiMajAxis = this.math.calcSMA(known, rad);
  this.target.per = this.math.calcPER(this.target.semiMajAxis, mu);
  this.target.time = this.math.parseSec(this.target.per, dayS);
  this.target.orbSpeed = Math.sqrt(mu * (1 / this.target.semiMajAxis));

  this.deploy = {};
  this.deploy.ratio = 1 + 1 / satCnt;
  this.deploy.per = this.target.per * this.deploy.ratio;
  this.deploy.time = this.math.parseSec(this.deploy.per, dayS);
  this.deploy.Rp = this.target.semiMajAxis;
  this.deploy.Ra = this.math.calcRa(this.deploy.per, this.deploy.Rp, mu);
  this.deploy.semiMajAxis = (this.deploy.Rp + this.deploy.Ra) / 2;
  this.deploy.Pe = this.target.altM;
  this.deploy.Ap = this.deploy.Ra - rad;
  var a = (2 / this.deploy.Rp - 1 / this.deploy.semiMajAxis);
  this.deploy.obtSpdPE = Math.sqrt(mu * a);
  this.deploy.circDVreq = this.target.orbSpeed - this.deploy.obtSpdPE;

  this.satInfo = {};
};
