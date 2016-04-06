var dataList;
var $form = {
  instructionButton: document.getElementById('instructionButton'),
  doMaths: document.getElementById('doMaths'),
  solSelect: document.getElementById('solSelect'),
  bodySelect: document.getElementById('bodySelect'),
  precInput: document.getElementById('precInput'),
  satCount: document.getElementById('satCount'),
  targBySelect: document.getElementById('targBySelect'),
  targAltInput: document.getElementById('targAltInput'),
  perDayInput: document.getElementById('perDayInput'),
  perHourInput: document.getElementById('perHourInput'),
  perMinInput: document.getElementById('perMinInput'),
  perSecInput: document.getElementById('perSecInput'),
  perInput: document.getElementsByClassName('perInputs'),
  optList: []
};
var outputSelectors = {};

// AJAX request for data file
function importData(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      dataList = JSON.parse(xhr.responseText);
      console.log('data parsed');
      callback.call($form);
    } else {
      console.log('Elevator music...');
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}
// $form methods
// creates select options from data provided by json loops
$form.selectBuild = function(callback) {
  function crtOpt(val, txt, addLoc) {
    var option = document.createElement('option');
    option.value = val;
    option.text = txt;
    if (typeof addLoc.add === 'function') {
      addLoc.add(option);
    } else if (typeof addLoc.push === 'function') {
      addLoc.push(option);
    } else {
      console.log('fail');
    }
  }

  dataList.forEach(function(obj, index) {
    crtOpt(index, obj.name, this.solSelect);
    var bodyList = [];
    dataList[index].bodys.forEach(function(array, ii) {
      crtOpt(ii, array.bodyName, bodyList);
    });
    $form.optList.push(bodyList);
  });
  console.log('selects build from json data');
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};

$form.selectHandler = function(callback) {
  if (this.bodySelect.options.length > 0) {
    this.bodySelect.options.length = 0;
  }
  $form.optList[this.solSelect.value].forEach(function(obj) {
    this.bodySelect.add(obj);
  });
  console.log('inserting body selects')
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
  console.log('handling targetBy inputs')
  if (typeof callback === 'function') {
    callback();
  }
}
$form.eventTriggers = function() {
  $form.targHandler();

  $form.targBySelect.addEventListener('change', $form.targHandler.bind(this));
  // sol selects
  $form.solSelect.addEventListener('change', $form.selectHandler.bind(this, this.recordBody));
  // body selects
  $form.bodySelect.addEventListener('change', $form.recordBody.bind(this));
  // alt input change
  /*
  $form.targAltInput.addEventListener('change', recordInitInfo(minAltMath, semiMajMathT, targPerMath, parseSec));
  // satellite count change
  $form.satCount.addEventListener('change', altReset);
  // placement precsision change
  $form.precInput.addEventListener('change', altReset);
*/
  console.log('triggers set')
}
$form.recordBody = function(callback) {
  this.userBody = dataList[this.solSelect.value].bodys[this.bodySelect.value];
  console.log('recording body');
  if (typeof callback === 'function') {
    callback();
  }
  return this;
}

importData('./scripts/data.json', $form.selectBuild.bind($form, $form.selectHandler));
/*
  function altReset() {
    $form.targAltInput.value = 0;
    recordInitInfo(minAltMath, semiMajMathT, targPerMath, parseSec);
  }
  function bodyReset() {
    $form.bodySelect.options.length = 0;
    $form.targAltInput.value = 0;
    bodyOptionBuild(recordInitInfo, minAltMath, semiMajMathT, targPerMath, parseSec);
  }
  */
