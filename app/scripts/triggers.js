$form.eventTriggers = function() {
  // runs complete chain 1 time for default values
  $form.recordBody().minAltMath().altHandler()
  .altToPer().perHandler();

  // sol selects
  $form.solSelect.addEventListener('change', function() {
    $form.selectHandler()
      .recordBody().minAltMath().altHandler()
      .altToPer().perHandler();
  });

  // body selects
  $form.bodySelect.addEventListener('change', function() {
    $form.recordBody().minAltMath().altHandler().altToPer().perHandler();
  });

  // satellite count change (handles minVal in case browser doesnt)
  $form.satCount.addEventListener('change', function() {
    $form.targAltInput.value = 0;
    if ($form.satCount.value < 2) {
      $form.satCount.value = 2;
    }
    $form.minAltMath().altHandler().altToPer().perHandler();
  });

  // placement precsision change
  $form.precInput.addEventListener('change', function() {
    $form.minAltMath().altHandler().altToPer().perHandler();
  });

  // disable either period or altInput
  $form.targBySelect.addEventListener('change', $form.targHandler.bind(this));

  // alt input change
  $form.targAltInput.addEventListener('change', function() {
    $form.altHandler().altToPer().perHandler();
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
