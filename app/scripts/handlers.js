// swaps out bodySelect options based on solSelect value, options in optList
$form.selectHandler = function(callback) {
  if (this.bodySelect.options.length > 0) {
    this.bodySelect.options.length = 0;
  }
  $form.optList[this.solSelect.value].forEach(function(obj) {
    this.bodySelect.add(obj);
    if (obj.text === 'Kerbin' || obj.text === 'Earth') {
      this.bodySelect.value = obj.value;
    }
  });
  console.log('handling body selects');
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

// disables period or alt inputs
$form.targHandler = function(callback) {
  var bool;
  if (this.targBySelect.value === 'alt') {
    bool = false;
  } else {
    bool = true;
  }
  this.targAltInput.disabled = bool;
  for (var i = 0; i < $form.perInput.length; i++) {
    $form.perInput[i].disabled = !bool;
  }
  console.log('handling targetBy inputs');
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

// copys the selected body object from the json dataList for maths
$form.recordBody = function(callback) {
  this.userBody = dataList[this.solSelect.value].bodys[this.bodySelect.value];
  console.log('recording body');
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

// prevents targeting an orbit under minimum alt/period
// if targAltitude is selected, period information is autofilled and vice-versa
$form.targValHandler = function(callback) {
  // converts D:H:M:S from form input into just seconds
  var parseTime = function(bodyT) {
    var sec = parseFloat($form.perSecInput.value);
    var min = parseInt($form.perMinInput.value, 10) * 60;
    var hour = parseInt($form.perHourInput.value, 10) * 3600;
    var day = parseInt($form.perDayInput.value, 10) * bodyT;
    var secTot = sec + min + hour + day;
    return secTot;
  };
  // fills in form D:H:M:S from an input seconds count and how many seconds
  // are in a bodys day (rotation time)
  var popTime = function(sec, bodyT) {
    $form.perSecInput.value = Math.floor((sec % 60) * 1000) / 1000;
    $form.perMinInput.value = Math.floor((sec % 3600) / 60);
    $form.perHourInput.value = Math.floor((sec % bodyT) / 3600);
    $form.perDayInput.value = Math.floor(sec / bodyT);
  };
  var bodySec = this.userBody.siderealDayS;
  var secTot;
  var alt;
  var depAp;
  if (this.targBySelect.value === 'alt') {
    var altInput = parseFloat(this.targAltInput.value);
    secTot = this.orbConvrt(altInput, 'alt', 1);
    depAp = $form.depMath(secTot);
    if (altInput < this.userBody.minOrbitAlt) {
      console.log('Too low, setting minAlt');
      this.targAltInput.value = this.userBody.minOrbitAlt;
      secTot = this.orbConvrt(this.userBody.minOrbitAlt, 'alt', 1);
      depAp = $form.depMath(secTot);
    } else if (depAp > this.userBody.maxOrbitAlt) {
      console.log('Too high, setting max alt');
      this.targAltInput.value = this.userBody.maxOrbitAlt;
      secTot = this.orbConvrt(this.userBody.maxOrbitAlt, 'alt', 1);
      depAp = $form.depMath(secTot);
    }
    popTime(secTot, bodySec);
    console.log('Alt changed, acceptable height. Time set.');
  } else {
    secTot = parseTime(bodySec);
    if (secTot < this.userBody.minOrbitPer) {
      console.log('Too low, setting minimum period.');
      secTot = this.userBody.minOrbitPer;
      depAp = $form.depMath(secTot);
    } else if (secTot > this.userBody.maxOrbitPer) {
      console.log('Too high, setting max per');
      secTot = this.userBody.maxOrbitPer;
      depAp = $form.depMath(secTot);
    }
    popTime(secTot, bodySec);
    alt = this.orbConvrt(secTot, 'per', 1);
    this.targAltInput.value = alt;
    console.log('Seconds parsed from input, alt updated');
  }
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

// zeros the appropriate input field for default minimum value on "major" value
// changes ie body, sol, placementPrecision, satCount
$form.zeroInputs = function() {
  if (this.targBySelect.value === 'alt') {
    this.targAltInput.value = 0;
  } else {
    for (var i = 0; i < $form.perInput.length; i++) {
      $form.perInput[i].value = 0;
    }
  }
  if (this.satCount.value < 2) {
    this.satCount.value = 2;
  }
  console.log('Inputs set to 0.');
  return this;
};

$form.resultHandler = function() {
  this.depAp.textContent = ' ' + this.userBody.depAp;
  this.depPe.textContent = ' ' + this.userBody.targAlt;
  return this;
};

$form.resultClear = function() {
  this.depAp.textContent = ' ';
  this.depPe.textContent = ' ';
  return this;
}
