var dataList;
var userInput = {};
var bodySelectList = [];
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
  altInputTable: document.getElementById('altInputTable'),
  perInputTable: document.getElementById('perInputTable')
};
var outputSelectors = {

};

// AJAX request for data file
function importData(url) {
  // adds entries to ui menus
  function listPopulate(array) {
    array.forEach(function(obj, index) {
      createOption(index, obj.name, inputSelectors.solSelect);
      var list = [];
      obj.bodys.forEach(function(body) {
        list.push(body.bodyName);
      });
      bodySelectList.push(list);
    });
    bodyOptionBuild();
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      dataList = JSON.parse(xhr.responseText);
      listPopulate(dataList);
    } else {
      console.log('Loading...');
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}
// builds the body list based on sol value
function bodyOptionBuild() {
  bodySelectList[inputSelectors.solSelect.value].forEach(function(array, ii) {
    createOption(ii, array, inputSelectors.bodySelect);
  });
}
// creates select options from data provided by json loops
function createOption(val, txt, addLoc) {
  var option = document.createElement('option');
  option.value = val;
  option.text = txt;
  addLoc.add(option);
}
// take a guess
function recordInitInfo() {
  userInput = {
    sol: inputSelectors.solSelect.value,
    body: inputSelectors.bodySelect.value,
    targBy: inputSelectors.targBySelect.value
  };
}
// bind event triggers - sol, body, targetby selects, bind buttons
function eventTriggers() {
  // sol selects
  inputSelectors.solSelect.addEventListener('change', function() {
    // clear body options
    inputSelectors.bodySelect.options.length = 0;
    // re-build body options
    bodyOptionBuild();
    recordInitInfo();
  });
  // body selects
  inputSelectors.bodySelect.addEventListener('change', function() {
    recordInitInfo();
    // perform math for min alt and per, store in userInput, fill form values
    console.log(userInput);
  });

  // targetby selects
  inputSelectors.targBySelect.addEventListener('change', function() {
    // show or hide appropriate table
    // disable form capture
  });
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

importData('./scripts/data.json');
eventTriggers();
