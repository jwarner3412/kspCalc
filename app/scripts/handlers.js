$form.selectHandler = function(callback) {
  if (this.bodySelect.options.length > 0) {
    this.bodySelect.options.length = 0;
  }
  $form.optList[this.solSelect.value].forEach(function(obj) {
    this.bodySelect.add(obj);
  });
  console.log('handling body selects');
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

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
  console.log('handling targetBy inputs' + this);
  if (typeof callback === 'function') {
    callback();
  }
};

$form.recordBody = function(callback) {
  this.userBody = dataList[this.solSelect.value].bodys[this.bodySelect.value];
  this.targAltInput.value = 0;
  console.log('recording body' + this);
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

$form.altHandler = function(callback) {
  if (this.targAltInput.value < this.userBody.minOrbitAlt) {
    this.targAltInput.value = this.userBody.minOrbitAlt;
  }
  if (typeof callback === 'function') {
    callback();
  }
  return this;
}
