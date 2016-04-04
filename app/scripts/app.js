var dataList;
var userInput = {};
var inputSelectors = {
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
  bodySelectList: []
};
var outputSelectors = {};

// AJAX request for data file
function importData(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      dataList = JSON.parse(xhr.responseText);
      callback.call(inputSelectors, dataList, callback);
    } else {
      console.log('Loading...');
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}
// inputSelectors methods
// creates select options from data provided by json loops
inputSelectors.createOption = function(val, txt, addLoc) {
  var option = document.createElement('option');
  option.value = val;
  option.text = txt;
  addLoc.add(option);
  console.log(val + txt);
  return this;
};
inputSelectors.solOptionBuild = function(data, callback) {
  data.forEach(function(obj, index) {
    inputSelectors.createOption(index, obj.name, this.solSelect);
  });
  callback.call(inputSelectors, data);
};
inputSelectors.bodyOptionBuild = function(data) {
  data[this.solSelect.value].bodys.forEach(function(array, ii) {
    inputSelectors.createOption(ii, array.bodyName, this.bodySelect);
  });
  return this;
};

importData('./scripts/data.json', inputSelectors.solOptionBuild(inputSelectors.bodyOptionBuild));
