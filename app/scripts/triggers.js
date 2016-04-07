$form.eventTriggers = function() {
  // sol selects
  $form.solSelect.addEventListener('change',
    $form.selectHandler.bind(this,
      this.recordBody.bind(this,
        $form.userBody.minAltMath.bind($form[userBody])
      )
    )
  );
  $form.bodySelect.addEventListener('change', $form.recordBody.bind(this,
    this.userBody.minAltMath.bind($form.userBody)
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
