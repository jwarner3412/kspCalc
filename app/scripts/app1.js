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
  perSecInput: document.getElementById('perSecInput')
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
  eventTriggers();
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
    solSelect: inputSelectors.solSelect.value,
    bodySelect: inputSelectors.bodySelect.value,
    targBySelect: inputSelectors.targBySelect.value,
    precInput: parseFloat(inputSelectors.precInput.value),
    satCount: parseFloat(inputSelectors.satCount.value)
  };
  userInput.body = dataList[userInput.solSelect].bodys[userInput.bodySelect];
  userInput.minAlt = Math.minAlt(userInput);
  if (inputSelectors.targAltInput.value === '' || inputSelectors.targAltInput.value < userInput.minAlt) {
    inputSelectors.targAltInput.value = userInput.minAlt;
  }
  userInput.targAltInput = parseFloat(inputSelectors.targAltInput.value);
  userInput.targSemiMaj = Math.semiMajT(userInput);
  userInput.perSecTot = 2 * Math.PI * Math.sqrt(userInput.targSemiMaj ^ 3 / userInput.body.MUms3);
  if (userInput.perSecTot > 60) {
    var secondsR = userInput.perSecTot % 60;
    inputSelectors.perSecInput.value = secondsR;
    var minutes = (userInput.perSecTot - secondsR) / 60;
    if (minutes > 60) {
      var minutesR = minutes % 60;
      inputSelectors.perMinInput.value = minutesR;
      var hours = (minutes - minutesR) / 60;
      if (hours > (userInput.body.siderealDayS / 3600)) {
        var hoursR = hours % (userInput.body.siderealDayS / 3600);
        inputSelectors.perHourInput.value = hoursR;
        var days = (hours - hoursR) / (userInput.body.siderealDayS / 3600);
        if (days > 0) {
          inputSelectors.perDayInput.value = days;
        } else {
          inputSelectors.perDayInput.value = 0;
        }
      } else {
        inputSelectors.perHourInput.value = hours;
        inputSelectors.perDayInput.value = 0;
      }
    } else {
      inputSelectors.perMinInput.value = minutes;
      inputSelectors.perHourInput.value = 0;
      inputSelectors.perDayInput.value = 0;
    }
  } else {
    inputSelectors.perSecInput.value = userInput.perSecTot;
    inputSelectors.perMinInput.value = 0;
    inputSelectors.perHourInput.value = 0;
    inputSelectors.perDayInput.value = 0;
  }
  console.log(userInput.perSecTot);
}
Math.toSec = function() {
  var sec = parseFloat(inputSelectors.perSecInput.value);
  var min = parseFloat(inputSelectors.perMinInput.value) * 60;
  var hour = parseFloat(inputSelectors.perHourInput.value) * 3600;
  var day = parseFloat(inputSelectors.perDayInput.value) * userInput.body.siderealDayS;
  return (sec + min + hour + day);
};
// math function object
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
Math.minAlt = function(input) {
  return Math.max(Math.ceil(input.body.radiusM / Math.cos(Math.radians(180 / input.satCount + input.precInput)) - input.body.radiusM), input.body.minPE);
};
Math.semiMajT = function(input) {
  return (2 * input.targAltInput + 2 * input.body.radiusM) / 2;
};
// bind event triggers - sol, body, targetby selects, bind buttons
function eventTriggers() {
  recordInitInfo();
  targHandler();
  function targHandler() {
    function disableAlt() {
      inputSelectors.targAltInput.disabled = false;
      inputSelectors.perDayInput.disabled = true;
      inputSelectors.perHourInput.disabled = true;
      inputSelectors.perMinInput.disabled = true;
      inputSelectors.perSecInput.disabled = true;
    }
    function disablePer() {
      inputSelectors.targAltInput.disabled = true;
      inputSelectors.perDayInput.disabled = false;
      inputSelectors.perHourInput.disabled = false;
      inputSelectors.perMinInput.disabled = false;
      inputSelectors.perSecInput.disabled = false;
    }
    if (inputSelectors.targBySelect.value === 'alt') {
      disablePer();
    } else {
      disableAlt();
    }
  }
  function periodHandler() {
    userInput.perSecTot = Math.toSec();
    recordInitInfo();
  }
  // sol selects
  inputSelectors.solSelect.addEventListener('change', function() {
    inputSelectors.bodySelect.options.length = 0;
    bodyOptionBuild();
  });
  // body selects
  inputSelectors.bodySelect.addEventListener('change', recordInitInfo);
  // alt input change
  inputSelectors.targAltInput.addEventListener('change', recordInitInfo);
  // satellite count change
  inputSelectors.satCount.addEventListener('change', recordInitInfo);
  // placement precsision change
  inputSelectors.precInput.addEventListener('change', recordInitInfo);
  // period input change
  inputSelectors.perSecInput.addEventListener('change', periodHandler);
  inputSelectors.perMinInput.addEventListener('change', periodHandler);
  inputSelectors.perHourInput.addEventListener('change', periodHandler);
  inputSelectors.perDayInput.addEventListener('change', periodHandler);
  // targetby selects
  inputSelectors.targBySelect.addEventListener('change', targHandler);
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
