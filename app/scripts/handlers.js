// swaps out bodySelect options based on solSelect value, options in optList
$form.selectHandler = function(callback) {
  console.log('Adding options to the body select.');
  if (this.bodySelect.options.length > 0) {
    this.bodySelect.options.length = 0;
  }
  $form.optList[this.solSelect.value].forEach(function(obj) {
    this.bodySelect.add(obj);
    if (obj.text === 'Kerbin' || obj.text === 'Earth') {
      this.bodySelect.value = obj.value;
    }
  });
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

// disables period or alt inputs
$form.targHandler = function(callback) {
  var bool;
  if (this.targBySelect.value === 'alt') {
    this.snapOpt[4] = 'alt';
    bool = false;
  } else {
    this.snapOpt[4] = 'per';
    bool = true;
  }
  console.log('Set to: ' + $form.snapOpt[4]);
  this.targAltInput.disabled = bool;
  for (var i = 0; i < $form.perInput.length; i++) {
    $form.perInput[i].disabled = !bool;
  }
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

// copys the selected body object from the json dataList for maths
$form.recordBody = function(callback) {
  console.log('Caching body.');
  this.userBody = dataList[this.solSelect.value].bodys[this.bodySelect.value];
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
  this.snapOpt[0] = this.userBody;
  this.snapOpt[1] = this.precInput.value;
  this.snapOpt[2] = this.satCount.value;
  console.log('Inputs set to 0. snapOpt\'s set: ' +
    $form.snapOpt[0] + ' ' + $form.snapOpt[1] + ' ' + $form.snapOpt[2]
  );
  return this;
};

$form.resultHandler = function() {
  this.depAp.textContent = ' ' + this.input.deploy.Ap + ' m';
  this.depPe.textContent = ' ' + this.input.deploy.Pe + ' m';
  this.targAltResult.textContent = ' ' + this.input.target.altM + ' m';
  return this;
};

$form.resultClear = function() {
  this.depAp.textContent = ' ';
  this.depPe.textContent = ' ';
  this.targAltResult.textContent = ' ';
  return this;
};
