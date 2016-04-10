// returns radians lolz
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// calculates minimum orbit based on satCount and body parameters
// sets min period and alt in userBody
$form.minMath = function() {
  var body = this.userBody;
  var bodyR = body.radiusM;
  var maxAP = body.soiRadM;
  var minPE = body.minPE;
  var satCount = this.satCount.value;
  var precInput = this.precInput.value;
  var rads = Math.radians(180 / satCount + precInput);
  var minAlt = Math.max(Math.ceil(bodyR / Math.cos(rads) - bodyR), minPE);
  var minOpts = [
    body,
    precInput,
    satCount,
    minAlt,
    'alt'
  ];
  this.minOrbit = new snapInput(minOpts);
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
  this.maxOrbit = new snapInput(maxOpts);
  console.log('maxOrbit calculated: ' + $form.maxOrbit.target.altM);

  return this;
};
