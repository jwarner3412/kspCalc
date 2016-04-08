(function(callback) {
  $form.importData('./scripts/data.json',
    $form.selectBuild.bind($form,
      $form.selectHandler.bind($form,
        $form.targHandler.bind($form,
          $form.eventTriggers.bind($form)
        )
      )
    )
  );
  if (typeof callback === 'function') {
    callback();
  }
})();
