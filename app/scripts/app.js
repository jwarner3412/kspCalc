var dataList;
var userInput = {
  recordInitInfo: function() {
    this.targBySelect = $form.targBySelect.value;
    this.precInput = parseFloat($form.precInput.value);
    this.satCount = parseInt($form.satCount.value, 10);
    this.body = dataList[$form.solSelect.value].bodys[$form.bodySelect.value];
    return this;
  }
};
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
  optList: []
};
var outputSelectors = {};

// AJAX request for data file
function importData(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      dataList = JSON.parse(xhr.responseText);
      callback.call($form, dataList);
    } else {
      console.log('Elevator music...');
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}
// $form methods
// creates select options from data provided by json loops
$form.selectBuild = function(data) {
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
  data.forEach(function(obj, index) {
    crtOpt(index, obj.name, this.solSelect);
    var bodyList = [];
    data[index].bodys.forEach(function(array, ii) {
      crtOpt(ii, array.bodyName, bodyList);
    });
    $form.optList.push(bodyList);
  });
  $form.selectHandler(eventTriggers);
};

$form.selectHandler = function(callback) {
  if ($form.bodySelect.options.length > 0) {
    $form.bodySelect.options.length = 0;
  }
  $form.optList[$form.solSelect.value].forEach(function(obj) {
    this.bodySelect.add(obj);
  });
  if (typeof callback === 'function') {
    callback();
  }
};

function eventTriggers() {
  targHandler();
  function targHandler() {
    function disableAlt() {
      $form.targAltInput.disabled = false;
      $form.perDayInput.disabled = true;
      $form.perHourInput.disabled = true;
      $form.perMinInput.disabled = true;
      $form.perSecInput.disabled = true;
    }
    function disablePer() {
      $form.targAltInput.disabled = true;
      $form.perDayInput.disabled = false;
      $form.perHourInput.disabled = false;
      $form.perMinInput.disabled = false;
      $form.perSecInput.disabled = false;
    }
    if ($form.targBySelect.value === 'alt') {
      disablePer();
    } else {
      disableAlt();
    }
  }
  function periodHandler() {
    //userInput.perSecTot = Math.toSec();
    userInput.recordInitInfo();
  }
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
  $form.targBySelect.addEventListener('change', targHandler);
  // sol selects
  $form.solSelect.addEventListener('change', $form.selectHandler);
  // body selects
  $form.bodySelect.addEventListener('change', userInput.recordInitInfo.bind(userInput));
  // alt input change
  /*
  $form.targAltInput.addEventListener('change', recordInitInfo(minAltMath, semiMajMathT, targPerMath, parseSec));
  // satellite count change
  $form.satCount.addEventListener('change', altReset);
  // placement precsision change
  $form.precInput.addEventListener('change', altReset);
  // period input change
  $form.perSecInput.addEventListener('change', periodHandler);
  $form.perMinInput.addEventListener('change', periodHandler);
  $form.perHourInput.addEventListener('change', periodHandler);
  $form.perDayInput.addEventListener('change', periodHandler);
  // targetby selects

  // buttons
    // instructionButton
      // pull up full screen instructions
    // doMaths
      // isolate body object in userInput object
      // all the math functions here
      // results write in function call
    // rtantenna button
      // write in small table with antenna ranges
*/
}

importData('./scripts/data.json', $form.selectBuild);
