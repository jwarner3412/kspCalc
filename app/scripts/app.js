// imports json datafile of solar systems and thier body objects and properties.
// builds select options from the data, stores them in a 2d array.
// sets initial values, disables proper form inputs, and binds triggers.
// have alot of if(callback) blocks, wasnt sure if i was going to call back or
// method chain. method chain mostly won out for sync stuff.
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
