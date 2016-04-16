// returns radians lolz
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
// sets numbers to 3 decimal places
$form.setDec = function(value) {
  return Math.round(value * 1000) / 1000;
};
// calculates minimum & max orbit based on satCount and body parameters
// does math, and snapShots a minOrbit obj and maxOrbit obj
$form.minMath = function() {
  var body = this.snapOpt[0];
  var bodyR = body.radiusM;
  var maxAP = body.soiRadM;
  var minPE = body.minPE;
  var precInput = parseFloat(this.snapOpt[1]);
  var satCount = parseInt(this.snapOpt[2], 10);

  var rads = Math.radians(180 / satCount + precInput);
  var minAlt = Math.max(Math.ceil(bodyR / Math.cos(rads) - bodyR), minPE);

  var minOpts = [
    body,
    precInput,
    satCount,
    minAlt,
    'alt'
  ];

  this.minOrbit = new SnapInput(minOpts);
  console.log('minOrbit calculated: ' + $form.minOrbit.target.altM);

  var ratio = 1 + 1 / satCount;
  var maxCircPer = (function(alt, b) {
    var tSM = Math.pow((((2 * alt) + (2 * b.radiusM)) / 2), 3);
    var perSecTot = 2 * Math.PI * Math.sqrt(tSM / b.MUms3);
    return perSecTot;
  })(maxAP, body);

  var maxPer = (maxCircPer / ratio) / ratio;

  var maxOpts = [
    body,
    precInput,
    satCount,
    maxPer,
    'per'
  ];

  this.maxOrbit = new SnapInput(maxOpts);
  console.log('maxOrbit calculated: ' + $form.maxOrbit.target.altM);

  return this;
};
