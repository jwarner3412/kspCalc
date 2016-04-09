/*
var Body = {
  "orbits": "Sun",
  "bodyName": "Mercury",
  "radiusM": 250000,
  "MUms3": 168609400000,
  "massKG": 2.526362e+21,
  "surfaceGravityMS2": 2.7,
  "soiRadM": 9646663,
  "siderealDayS": 1210000,
  "synchSmaM": 18423165.1,
  "minPE": 6818,
  "siderealOrbitS": 2215754.22,
  "synodicDayS": 2665723.45
}
*/
var Body = function(name, orbits, rad, mass, daysec, minPE) {
  var G = 3.5316e+12;
  this.orbits = orbits;
  this.bodyName = name;
  this.radiusM = rad;
  this.massKG = mass
  this.siderealDayS = daysec;
  this.MUms3 = (G * (mass * 1000));
}

var mercury = new Body('Mercury', 'Sun', 261600000, 1.756567E+28, 1210000, 6818);
console.dir(mercury);
console.log(typeof G + typeof mass);
