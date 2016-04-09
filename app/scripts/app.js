(function(callback) {
  $form.importData('./data.json',
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
