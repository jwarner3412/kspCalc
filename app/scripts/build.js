var dataList = [];
var antList;
var $form = {
  container: document.getElementsByClassName('calcWrap'),
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
  depPe: document.getElementById('depPe'),
  depAp: document.getElementById('depAp'),
  results: document.getElementById('results'),
  optList: [],
  snapOpt: [0, 0, 0, 0, 0]
};

// AJAX request for data file
$form.importData = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var list = JSON.parse(xhr.responseText);
      console.log(url + ' JSON data parsed.');
      if (typeof callback === 'function') {
        callback(list);
      } else {
        return list;
      }
    } else {
      console.log(url + ' Elevator music...');
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};

// creates select options from data provided by json loops
// cycles over dataList, sets option names(looks at 'orbits' prop to see if its
// a sun or moon and sets a -/* accordingly), values for array lookups(option
// value is the key value of the corresponding bodydata object), and adds to
// either array or html select
$form.selectBuild = function(list, callback) {
  dataList = list;
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
      if (array.orbits === 'Sun') {
        crtOpt(ii, array.bodyName, bodyList);
      } else if (array.orbits === 0) {
        crtOpt(ii, '* ' + array.bodyName + ' *', bodyList);
      } else {
        crtOpt(ii, ' -' + array.bodyName, bodyList);
      }
    });
    $form.optList.push(bodyList);
  });
  console.log('Building select options from JSON data.');
  if (typeof callback === 'function') {
    callback();
  } else {
    return this;
  }
};
