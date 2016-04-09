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

// AJAX request for data file
$form.importData = function(url, callback) {
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
};
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
      if (array.orbits === 'Sun' || array.orbits === 0) {
        crtOpt(ii, array.bodyName, bodyList);
      } else {
        crtOpt(ii, '-' + array.bodyName, bodyList);
      }
    });
    $form.optList.push(bodyList);
  });
  console.log('selects build from json data');
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};
