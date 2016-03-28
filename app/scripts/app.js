// import json data - ajax for site and requires for node
var bodyObjectList;
var bodyNameInput = document.getElementById('bodyName');
var numOfSatsInput = document.getElementById('numOfSats');
var targetSelector = document.getElementById('targetType');

var targetAlt = document.getElementById('targetAlt');
var altForm = targetAlt.querySelector('label input');

var targetPer = document.getElementById('targetPer');
var secForm = targetPer.querySelector('label input[name="seconds"]');
var minForm = targetPer.querySelector('label input[name="minutes"]');
var hourForm = targetPer.querySelector('label input[name="hours"]');
var dayForm = targetPer.querySelector('label input[name="days"]');

var submit = document.getElementById('submit');

var userInput;

// sets form to 0 when alternate form submitted
function zeroPerForm() {
  secForm.value = 0;
  minForm.value = 0;
  hourForm.value = 0;
  dayForm.value = 0;
}
function zeroAltForm() {
  altForm.value = 0;
}

function importData(url) {
  // populate #bodyName select with json data
  function bodyListPopulate() {
    // loop over each bodyobj
    bodyObjectList.forEach(function(body) {
      // create option under #bodyName=bodyobj.bodyName
      var option = document.createElement('option');
      option.value = body.bodyName;
      option.text = body.bodyName;
      bodyNameInput.add(option);
    });
  }

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // everything is good, the response is received
      bodyObjectList = JSON.parse(xhr.responseText);
      bodyListPopulate();
    } else {
        // still not ready
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

// gather info on submit
function submitForm () {
  // prepare body object
  bodyObjectList.forEach(function(body) {
    if (body.bodyName === userInput.body) {
      userInput.body = body;
    }
  });

  // gather form info, set unset values to 0
  if (userInput.targBy === 'Altitude') {
    zeroPerForm();
    userInput.targAlt = parseInt(altForm.value, 10);
    if (altForm.value < userInput.body.minPE) {
      alert('Please enter a target altitude higher than ' + userInput.body.minPE + '.');
    }
  } else if (userInput.targBy === 'Period') {
    zeroAltForm();
    var periodList = targetPer.querySelectorAll('label input');
    // check to make sure all entries are numbers, if not set to 0
    for (var i = 0; i<periodList.length;i++) {
      if (periodList[i].value === '') {
        periodList[i].value = 0;
      }
    }
  }
  // do time maths to return info to userInput obj in seconds
  var timeSec = parseInt(secForm.value, 10);
  timeSec += parseInt(minForm.value, 10) *60;
  timeSec += parseInt(hourForm.value, 10) *3600;
  timeSec += parseInt(dayForm.value, 10) * userInput.body.siderealDayS;
  userInput.targPer = timeSec;
}

// bind and define event handlers
function eventTriggers() {
  function targSel(targ) {
    // if altitude
    if (targ.value === 'Altitude') {
      // hide #targetPer show #targetAlt
      targetPer.style.display = 'none';
      targetAlt.style.display = 'block';
    // if period
    } else if (targ.value === 'Period') {
      // hide #targetAlt show #targetPer
      targetAlt.style.display = 'none';
      targetPer.style.display = 'block';
    // if minimum
    } else {
      // hide #targetPer && #targetAlt
      targetPer.style.display = 'none';
      targetAlt.style.display = 'none';
    }
  }
  // calls before input to set default
  targSel(targetSelector);
  // bind onchange event handler to target select
  targetSelector.addEventListener('change', function() {
    targSel(this);
  });
  // bind submit button
  submit.addEventListener('click', function(evt) {
    // on submit, collect form data and prepare proper body objects for maths
    evt.preventDefault();
    userInput = {
      body: bodyNameInput.value,
      satNum: numOfSatsInput.value,
      targBy: targetSelector.value
    };
    submitForm();
  });
}

importData('./scripts/data.json');
eventTriggers();
