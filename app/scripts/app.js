// import json data - ajax for site and requires for node
var bodyObjectList;
var bodyNameInput = document.getElementById('bodyName');
var numOfSatsInput = document.getElementById('numOfSats');
var targetSelector = document.getElementById('targetType');

var targetAlt = document.getElementById('targetAlt');
var targetPer = document.getElementById('targetPer');
var submit = document.getElementById('submit');

var userInput;

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

    // prepare body object
    bodyObjectList.forEach(function(body) {
      if (body.bodyName === userInput.body) {
        userInput.body = body;
      }
    });

    if (userInput.targBy === 'Altitude') {
      userInput.targAlt = targetAlt.querySelector('label input').value;
    } else if (userInput.targBy === 'Period') {
      var timeSec = targetPer.querySelector('label input[name="seconds"]').value;
      var timeMin = targetPer.querySelector('label input[name="minutes"]').value;
      var timeHour = targetPer.querySelector('label input[name="hours"]').value;
      var timeDay = targetPer.querySelector('label input[name="days"]').value * userInput.body.siderealDayS;
      userInput.targPer = timeSec + timeMin + timeHour + timeDay;
      console.log(userInput.targPer);
    }
  });
}

importData('./scripts/data.json');
eventTriggers();
