$form.eventTriggers = function() {
  // runs complete chain 1 time for default values
  $form.recordBody().zeroInputs().minMath().targValHandler();

  // sol selects
  $form.solSelect.addEventListener('change', function() {
    $form.selectHandler();
  });

  // body selects
  $form.bodySelect.addEventListener('change', function() {
    $form.recordBody().zeroInputs().minMath().targValHandler();
  });

  // satellite count change (handles minVal in case browser doesnt)
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
  console.log('triggers set');
};
