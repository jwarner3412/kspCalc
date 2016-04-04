Math.toSec = function() {
  var daySec = parseFloat(userInput.body.siderealDayS);
  var sec = parseFloat(inputSelectors.perSecInput.value);
  var min = parseInt(inputSelectors.perMinInput.value, 10) * 60;
  var hour = parseInt(inputSelectors.perHourInput.value, 10) * 3600;
  var day = parseInt(inputSelectors.perDayInput.value, 10) * daySec;
  return (sec + min + hour + day);
};
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// userInput methods
// take a guess
userInput.prototype.recordInitInfo = function() {
  this.solSelect = inputSelectors.solSelect.value;
  this.bodySelect = inputSelectors.bodySelect.value;
  this.targBySelect = inputSelectors.targBySelect.value;
  this.precInput = parseFloat(inputSelectors.precInput.value);
  this.satCount = parseInt(inputSelectors.satCount.value, 10);
  this.body = dataList[this.solSelect].bodys[this.bodySelect];
  return this;
}
userInput.prototype.minAltMath = function() {
  var bodyR = userInput.body.radiusM;
  var minPE = userInput.body.minPE;
  var satCount = userInput.satCount;
  var precInput = userInput.precInput;
  var rads = Math.radians(180 / satCount + precInput);
  var minAlt = Math.max(Math.ceil(bodyR / Math.cos(rads) - bodyR), minPE);
  var tAltVal = parseFloat(inputSelectors.targAltInput.value);
  if (tAltVal === '' || tAltVal < minAlt) {
    inputSelectors.targAltInput.value = minAlt;
  }
  userInput.targAltInput = parseFloat(inputSelectors.targAltInput.value);
  return this;
}
userInput.prototype.semiMajMathT = function() {
  userInput.targSemiMaj = (((2 * userInput.targAltInput) + (2 * userInput.body.radiusM)) / 2);
  return this;
}
userInput.prototype.targPerMath = function() {
  var Mu = userInput.body.MUms3;
  var tSM = userInput.targSemiMaj;
  userInput.perSecTot = 2 * Math.PI * Math.sqrt(tSM ^ 3 / Mu);
  return this;
}
userInput.prototype.parseSec = function() {
  if (userInput.perSecTot > 60) {
    var secondsR = userInput.perSecTot % 60;
    inputSelectors.perSecInput.value = secondsR;
    var minutes = (userInput.perSecTot - secondsR) / 60;
    if (minutes > 60) {
      var minutesR = minutes % 60;
      inputSelectors.perMinInput.value = minutesR;
      var hours = (minutes - minutesR) / 60;
      if (hours > (userInput.body.siderealDayS / 3600)) {
        var hoursR = hours % (userInput.body.siderealDayS / 3600);
        inputSelectors.perHourInput.value = hoursR;
        var days = (hours - hoursR) / (userInput.body.siderealDayS / 3600);
        if (days > 0) {
          inputSelectors.perDayInput.value = days;
        } else {
          inputSelectors.perDayInput.value = 0;
        }
      } else {
        inputSelectors.perHourInput.value = hours;
        inputSelectors.perDayInput.value = 0;
      }
    } else {
      inputSelectors.perMinInput.value = minutes;
      inputSelectors.perHourInput.value = 0;
      inputSelectors.perDayInput.value = 0;
    }
  } else {
    inputSelectors.perSecInput.value = userInput.perSecTot;
    inputSelectors.perMinInput.value = 0;
    inputSelectors.perHourInput.value = 0;
    inputSelectors.perDayInput.value = 0;
  }
  return this;
}

// bind event triggers - sol, body, targetby selects, bind buttons
function eventTriggers() {
  targHandler();
  function targHandler() {
    function disableAlt() {
      inputSelectors.targAltInput.disabled = false;
      inputSelectors.perDayInput.disabled = true;
      inputSelectors.perHourInput.disabled = true;
      inputSelectors.perMinInput.disabled = true;
      inputSelectors.perSecInput.disabled = true;
    }
    function disablePer() {
      inputSelectors.targAltInput.disabled = true;
      inputSelectors.perDayInput.disabled = false;
      inputSelectors.perHourInput.disabled = false;
      inputSelectors.perMinInput.disabled = false;
      inputSelectors.perSecInput.disabled = false;
    }
    if (inputSelectors.targBySelect.value === 'alt') {
      disablePer();
    } else {
      disableAlt();
    }
  }
  function periodHandler() {
    userInput.perSecTot = Math.toSec();
    recordInitInfo(minAltMath, semiMajMathT, targPerMath, parseSec);
  }
  function altReset() {
    inputSelectors.targAltInput.value = 0;
    recordInitInfo(minAltMath, semiMajMathT, targPerMath, parseSec);
  }
  function bodyReset() {
    inputSelectors.bodySelect.options.length = 0;
    inputSelectors.targAltInput.value = 0;
    bodyOptionBuild(recordInitInfo, minAltMath, semiMajMathT, targPerMath, parseSec);
  }
  // sol selects
  inputSelectors.solSelect.addEventListener('change', bodyReset);
  // body selects
  inputSelectors.bodySelect.addEventListener('change', altReset);
  // alt input change
  inputSelectors.targAltInput.addEventListener('change', recordInitInfo(minAltMath, semiMajMathT, targPerMath, parseSec));
  // satellite count change
  inputSelectors.satCount.addEventListener('change', altReset);
  // placement precsision change
  inputSelectors.precInput.addEventListener('change', altReset);
  // period input change
  inputSelectors.perSecInput.addEventListener('change', periodHandler);
  inputSelectors.perMinInput.addEventListener('change', periodHandler);
  inputSelectors.perHourInput.addEventListener('change', periodHandler);
  inputSelectors.perDayInput.addEventListener('change', periodHandler);
  // targetby selects
  inputSelectors.targBySelect.addEventListener('change', targHandler);
  // buttons
    // instructionButton
      // pull up full screen instructions
    // doMaths
      // isolate body object in userInput object
      // all the math functions here
      // results write in function call
    // rtantenna button
      // write in small table with antenna ranges
}