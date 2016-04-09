// returns radians lolz
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

$form.altToPer = function(alt, callback) {
  var rad = this.userBody.radiusM;
  var Mu = this.userBody.MUms3;
  var targSemiMaj = (((2 * alt) + (2 * rad)) / 2);
  var tSM = Math.pow(targSemiMaj, 3);
  var sqrt = Math.sqrt(tSM / Mu);
  var perSecTot = 2 * Math.PI * sqrt;
  this.userBody.targSemiMaj = targSemiMaj;
  this.userBody.targAlt = alt;
  this.userBody.targPer = perSecTot;
  if (typeof callback === 'function') {
    callback(perSecTot);
  }
  return perSecTot;
};

$form.perToAlt = function(per, callback) {
  var rad = this.userBody.radiusM;
  var mu = this.userBody.MUms3;
  mu *= 2;
  var pii = Math.PI;
  var a = Math.pow(per, 2 / 3) * Math.pow(mu, 1 / 3);
  var b = Math.pow(pii, 2 / 3) * 2;
  var targSemiMaj = a / b;
  var alt = targSemiMaj - rad;
  this.userBody.targSemiMaj = targSemiMaj;
  this.userBody.targAlt = alt;
  this.userBody.targPer = per;
  if (typeof callback === 'function') {
    callback(alt);
  }
  return alt;
};

// calculates minimum orbit based on satCount and body parameters
$form.minMath = function() {
  var bodyR = this.userBody.radiusM;
  var minPE = this.userBody.minPE;
  var satCount = parseInt(this.satCount.value, 10);
  var precInput = parseFloat(this.precInput.value);
  var rads = Math.radians(180 / satCount + precInput);
  var minAlt = Math.max(Math.ceil(bodyR / Math.cos(rads) - bodyR), minPE);
  this.userBody.minOrbitAlt = minAlt;
  var minPer = this.altToPer(minAlt);
  this.userBody.minOrbitPer = minPer;
  return this;
};
