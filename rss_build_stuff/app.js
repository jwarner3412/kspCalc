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
var data = require('./rss.json');
var list = [];
var Body = function(obj) {
  var G = 6.674e-11;
  this.orbits = obj.orbits;
  this.bodyName = obj.bodyName;
  this.radiusM = obj.radiusM;
  this.MUms3 = (G * obj.massKG);
  this.massKG = obj.massKG;
  this.surfaceGravityMS2 = (G * obj.massKG) / (obj.radiusM * obj.radiusM);
  if (obj.synchSmaM) {
    var parentMass;
    data.forEach(function(element,index,array){
      if (element.bodyName === obj.orbits) {
        parentMass = element.massKG;
        console.log(element.bodyName);
        console.log(parentMass);
      }
    })
    this.SmaM = obj.synchSmaM;
    this.soiRadM = obj.synchSmaM * Math.pow(obj.massKG / parentMass, 2 / 5);
  }
  this.siderealDayS = obj.siderealDayS;
  this.minPE = obj.minPE;
  this.siderealOrbitS;
  this.siderealDayS = obj.siderealDayS;
}

data.forEach(function(element, index, array){
  list[index] = new Body(element);
})
console.dir(list);
