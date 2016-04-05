Math.toSec = function() {
  var daySec = parseFloat(userInput.body.siderealDayS);
  var sec = parseFloat($form.perSecInput.value);
  var min = parseInt($form.perMinInput.value, 10) * 60;
  var hour = parseInt($form.perHourInput.value, 10) * 3600;
  var day = parseInt($form.perDayInput.value, 10) * daySec;
  return (sec + min + hour + day);
};
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// userInput methods
// take a guess

userInput.prototype.minAltMath = function() {
  var bodyR = userInput.body.radiusM;
  var minPE = userInput.body.minPE;
  var satCount = userInput.satCount;
  var precInput = userInput.precInput;
  var rads = Math.radians(180 / satCount + precInput);
  var minAlt = Math.max(Math.ceil(bodyR / Math.cos(rads) - bodyR), minPE);
  var tAltVal = parseFloat($form.targAltInput.value);
  if (tAltVal === '' || tAltVal < minAlt) {
    $form.targAltInput.value = minAlt;
  }
  userInput.targAltInput = parseFloat($form.targAltInput.value);
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
    $form.perSecInput.value = secondsR;
    var minutes = (userInput.perSecTot - secondsR) / 60;
    if (minutes > 60) {
      var minutesR = minutes % 60;
      $form.perMinInput.value = minutesR;
      var hours = (minutes - minutesR) / 60;
      if (hours > (userInput.body.siderealDayS / 3600)) {
        var hoursR = hours % (userInput.body.siderealDayS / 3600);
        $form.perHourInput.value = hoursR;
        var days = (hours - hoursR) / (userInput.body.siderealDayS / 3600);
        if (days > 0) {
          $form.perDayInput.value = days;
        } else {
          $form.perDayInput.value = 0;
        }
      } else {
        $form.perHourInput.value = hours;
        $form.perDayInput.value = 0;
      }
    } else {
      $form.perMinInput.value = minutes;
      $form.perHourInput.value = 0;
      $form.perDayInput.value = 0;
    }
  } else {
    $form.perSecInput.value = userInput.perSecTot;
    $form.perMinInput.value = 0;
    $form.perHourInput.value = 0;
    $form.perDayInput.value = 0;
  }
  return this;
}

// bind event triggers - sol, body, targetby selects, bind buttons
