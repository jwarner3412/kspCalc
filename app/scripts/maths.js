// returns radians lolz
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// takes in an altitude and returns and orbit period in seconds
// sets values in userBody for later usage
$form.orbConvrt = function(value, type, record, callback) {
  var rad = this.userBody.radiusM;
  var Mu = this.userBody.MUms3;
  var targSemiMaj;
  var perSecTot;
  var alt;
  var result;
  if (type === 'alt') {
    alt = value;
    targSemiMaj = (((2 * value) + (2 * rad)) / 2);
    var tSM = Math.pow(targSemiMaj, 3);
    var sqrt = Math.sqrt(tSM / Mu);
    perSecTot = 2 * Math.PI * sqrt;
    result = perSecTot;
  } else {
    perSecTot = value;
    Mu *= 2;
    var pii = Math.PI;
    var a = Math.pow(perSecTot, 2 / 3) * Math.pow(Mu, 1 / 3);
    var b = Math.pow(pii, 2 / 3) * 2;
    targSemiMaj = a / b;
    alt = targSemiMaj - rad;
    result = alt;
  }
  if (record) {
    console.log('recording values from conversion math');
    this.userBody.targSemiMaj = targSemiMaj;
    this.userBody.targAlt = alt;
    this.userBody.targPer = perSecTot;
  }
  if (typeof callback === 'function') {
    callback(result);
  }
  return result;
};

// calculates minimum orbit based on satCount and body parameters
// sets min period and alt in userBody
$form.minMath = function() {
  var bodyR = this.userBody.radiusM;
  var minPE = this.userBody.minPE;
  var satCount = parseInt(this.satCount.value, 10);
  var precInput = parseFloat(this.precInput.value);
  var rads = Math.radians(180 / satCount + precInput);
  var minAlt = Math.max(Math.ceil(bodyR / Math.cos(rads) - bodyR), minPE);
  var minPer = this.orbConvrt(minAlt, 'alt');
  var ratio = 1 + 1 / satCount;
  var maxAP = this.userBody.soiRadM;
  var maxCircPer = this.orbConvrt(maxAP, 'alt');
  var maxPer = (maxCircPer / ratio) / ratio;
  var maxPE = this.orbConvrt(maxPer, 'per');
  this.userBody.ratio = ratio;
  this.userBody.maxOrbitPer = maxPer;
  this.userBody.maxOrbitAlt = maxPE;
  this.userBody.minOrbitAlt = minAlt;
  this.userBody.minOrbitPer = minPer;
  return this;
};

$form.depMath = function(targPer) {
  var depPer = this.userBody.ratio * targPer;
  var a = Math.pow(depPer, 2 / 3) * Math.pow((this.userBody.MUms3 * 2), 1 / 3);
  var b = Math.pow(Math.PI, 2 / 3);
  var rp = a / b - this.userBody.targSemiMaj;
  var depAp = rp - this.userBody.radiusM;
  this.userBody.depAp = depAp;
  return depAp;
};
