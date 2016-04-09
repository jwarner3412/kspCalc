$form.eventTriggers = function() {
  // runs complete chain 1 time for default values
  $form.zeroInputs().recordBody().minMath().altHandler().perHandler();

  // sol selects
  $form.solSelect.addEventListener('change', function() {
    $form.selectHandler().zeroInputs()
      .recordBody().minMath().altHandler().perHandler();
  });

  // body selects
  $form.bodySelect.addEventListener('change', function() {
    $form.zeroInputs().recordBody().minMath().altHandler().perHandler();
  });

  // satellite count change (handles minVal in case browser doesnt)
  $form.satCount.addEventListener('change', function() {
    $form.zeroInputs().minMath().altHandler().perHandler();
  });

  // placement precsision change
  $form.precInput.addEventListener('change', function() {
    $form.zeroInputs().minMath().altHandler().perHandler();
  });

  // disable either period or altInput
  $form.targBySelect.addEventListener('change', $form.targHandler.bind(this));

  // alt input change
  $form.targAltInput.addEventListener('change', function() {
    $form.altHandler().perHandler();
  });

  // adds period input listeners
  $form.perSecInput.addEventListener('change', function() {
    $form.perHandler();
  });
  $form.perMinInput.addEventListener('change', function() {
    $form.perHandler();
  });
  $form.perHourInput.addEventListener('change', function() {
    $form.perHandler();
  });
  $form.perDayInput.addEventListener('change', function() {
    $form.perHandler();
  });
  console.log('triggers set');
};
