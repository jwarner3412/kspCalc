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
  this.targAltInput.value = 0;
  console.log('recording body');
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

// prevents targeting and orbit under minimum alt
$form.altHandler = function(callback) {
  var altInput = parseFloat(this.targAltInput.value);
  if (altInput < this.userBody.minOrbitAlt) {
    console.log('settin minAlt');
    this.targAltInput.value = this.userBody.minOrbitAlt;
  }
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

// either populates period data in form or sets perSecTot
$form.perHandler = function() {
  var targBy = this.targBySelect.value;
  var bodySec;
  var secTot;
  if (targBy === 'alt') {
    bodySec = this.userBody.siderealDayS;
    secTot = this.perSecTot;
    this.perSecInput.value = Math.floor((secTot % 60) * 1000) / 1000;
    this.perMinInput.value = Math.floor((secTot % 3600) / 60);
    this.perHourInput.value = Math.floor((secTot % bodySec) / 3600);
    this.perDayInput.value = Math.floor(secTot / bodySec);
    console.log('time set');
  } else {
    bodySec = parseFloat($form.userBody.siderealDayS);
    var sec = parseFloat($form.perSecInput.value);
    var min = parseInt($form.perMinInput.value, 10) * 60;
    var hour = parseInt($form.perHourInput.value, 10) * 3600;
    var day = parseInt($form.perDayInput.value, 10) * bodySec;
    secTot = sec + min + hour + day;
    this.perSecTot = secTot;
    console.log('seconds parsed from input');
  }
  return this;
};
