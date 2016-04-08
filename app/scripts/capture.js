// returns radians lolz
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// calculates minimum orbit based on satCount and body parameters
$form.minAltMath = function() {
  var bodyR = this.userBody.radiusM;
  var minPE = this.userBody.minPE;
  var satCount = parseInt(this.satCount.value, 10);
  var precInput = parseFloat(this.precInput.value);
  var rads = Math.radians(180 / satCount + precInput);
  var minAlt = Math.max(Math.ceil(bodyR / Math.cos(rads) - bodyR), minPE);
  this.userBody.minOrbitAlt = minAlt;
  console.log('minimum alt maths: ' + minAlt);
  return this;
};

$form.altToPer = function() {
  var altInput = this.targAltInput.value;
  var rad = this.userBody.radiusM;
  var Mu = this.userBody.MUms3;
  var targSemiMaj = (((2 * altInput) + (2 * rad)) / 2);
  this.userBody.targSemiMaj = targSemiMaj;
  var tSM = Math.pow(targSemiMaj, 3);
  var sqrt = Math.sqrt(tSM / Mu);
  var perSecTot = 2 * Math.PI * sqrt;
  this.perSecTot = perSecTot;
  console.log('period math from alt: ' + this.perSecTot);
  return this;
};

$form.perToAlt = function() {

};
