$form.eventTriggers = function() {
  // sol selects
  $form.solSelect.addEventListener('change',
    $form.selectHandler.bind(this,
      $form.recordBody.bind(this,
        $form.minAltMath.bind(this,
          $form.altHandler.bind(this)
        )
      )
    )
  );
  $form.bodySelect.addEventListener('change', $form.recordBody.bind(this,
    $form.minAltMath.bind(this,
      $form.altHandler.bind(this)
    )
  ));
  // alt input change
  /*
  $form.targAltInput.addEventListener('change', recordInitInfo(minAltMath, semiMajMathT, targPerMath, parseSec));
  // satellite count change
  $form.satCount.addEventListener('change', altReset);
  // placement precsision change
  $form.precInput.addEventListener('change', altReset);
*/
  $form.targBySelect.addEventListener('change', $form.targHandler.bind(this));
  console.log('triggers set');
};
