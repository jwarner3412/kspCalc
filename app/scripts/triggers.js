$form.prevDefault = function(evt) {
  evt.preventDefault();
  return this;
};

$form.eventTriggers = function() {
  // runs complete chain 1 time for default values
  // selects are built on app start
  $form.recordBody().zeroInputs().minMath().targValHandler();

  // sol selects
  $form.solSelect.addEventListener('change', function() {
    $form.selectHandler();
  });

  // body selects
  $form.bodySelect.addEventListener('change', function() {
    $form.recordBody().zeroInputs().minMath().targValHandler();
  });

  // satellite count change
  $form.satCount.addEventListener('change', function() {
    $form.zeroInputs().minMath().targValHandler();
  });

  // placement precsision change
  $form.precInput.addEventListener('change', function() {
    $form.zeroInputs().minMath().targValHandler();
  });

  // disable either period or altInput
  $form.targBySelect.addEventListener('change', function() {
    $form.targHandler();
  });

  // alt input change
  $form.targAltInput.addEventListener('change', function() {
    $form.targValHandler();
  });

  // adds period input listeners
  $form.perSecInput.addEventListener('change', function() {
    $form.targValHandler();
  });
  $form.perMinInput.addEventListener('change', function() {
    $form.targValHandler();
  });
  $form.perHourInput.addEventListener('change', function() {
    $form.targValHandler();
  });
  $form.perDayInput.addEventListener('change', function() {
    $form.targValHandler();
  });

// buttons
  $form.doMaths.addEventListener('click', function(evt) {
    evt.preventDefault();
    $form.resultHandler($form.input);
  });

  $form.instructionButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    $form.help.style.display = 'block';
  });
  $form.helpClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    $form.help.style.display = 'none';
  });

  console.log('Event listeners set.');
};
