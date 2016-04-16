// imports json datafile of solar systems and thier body objects and properties.
// builds select options from the data, stores them in a 2d array.
// sets initial values, disables proper form inputs, and binds triggers.
// have alot of if(callback) blocks, wasnt sure if i was going to call back or
// method chain. method chain mostly won out for sync stuff.
(function() {
  $form.importData('./data.json', function(b) {
    $form.selectBuild(b).selectHandler().targHandler().eventTriggers();
  });
})();

// antenna info for the results page
// ends at import, dont have handler yet
(function() {
  antList = $form.importData('./ant.json');
})();

// (c) Copyright 2015 person or company, all rights reserved.
