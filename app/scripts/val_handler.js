// prevents targeting an orbit under minimum alt/period
// if targAltitude is selected, period information is autofilled and vice-versa
$form.targValHandler = function(callback) {
  // converts D:H:M:S from form input into just seconds
  var parseTime = function(bodyT) {
    for (var i = 0; i < $form.perInput.length; i++) {
      if (!$form.perInput[i].value) {
        $form.perInput[i].value = 0;
      }
    }
    var sec = parseFloat($form.perSecInput.value);
    var min = parseInt($form.perMinInput.value, 10) * 60;
    var hour = parseInt($form.perHourInput.value, 10) * 3600;
    var day = parseInt($form.perDayInput.value, 10) * bodyT;
    var secTot = sec + min + hour + day;
    console.log('Time parsed from seconds.');
    return secTot;
  };

  // fills in form D:H:M:S from an input seconds count and how many seconds
  // are in a bodys day (rotation time)
  var popTime = function(obj) {
    var t = obj.target.time;
    $form.perSecInput.value = t[3];
    $form.perMinInput.value = t[2];
    $form.perHourInput.value = t[1];
    $form.perDayInput.value = t[0];
  };
  var snapShot = function(select) {
    if (this.snapOpt[0] && this.snapOpt[1] &&
    this.snapOpt[2] && this.snapOpt[4]) {
      this.snapOpt[3] = select;
      this.input = new SnapInput(this.snapOpt);
      console.log('snapShot ' + $form.snapOpt[3]);
    } else {
      console.log('options not yet initialized');
    }
    return this;
  };
  if (this.snapOpt[4] === 'alt') {
    if (this.targAltInput.value < this.minOrbit.target.altM ||
    !this.targAltInput.value) {
      console.log('Too low, setting minAlt.');
      this.targAltInput.value = this.setDec(this.minOrbit.target.altM);
    }

    snapShot.call($form, $form.targAltInput.value);

    if (this.input.deploy.Ap > this.maxOrbit.deploy.Ap &&
    this.snapOpt[0].soiRadM) {
      console.log('Too high, setting maxAlt.');
      this.targAltInput.value = this.setDec(this.maxOrbit.target.altM);
      snapShot.call($form, $form.targAltInput.value);
    }
    popTime(this.input);
    console.log('Acceptable altitude. Time set.');
  } else {
    var bodySec = this.snapOpt[0].siderealDayS;
    var secTot = parseTime(bodySec);
    if (secTot < this.minOrbit.target.per) {
      console.log('Too low, setting minimum period.');
      secTot = this.minOrbit.target.per;
    }
    snapShot.call($form, secTot);

    if (secTot > this.maxOrbit.deploy.per && this.snapOpt[0].soiRadM) {
      console.log('Too high, setting max period.');
      secTot = this.maxOrbit.deploy.per;
      snapShot.call($form, secTot);
    }
    console.log('Acceptable period. Alt updated.');
    popTime(this.input);
    this.targAltInput.value = this.setDec(this.input.target.altM);
  }
  this.resultClear();
  if (typeof callback === 'function') {
    callback();
  }
  return this;
};
