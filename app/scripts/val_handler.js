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
  var popTime = function(sec, bodyT) {
    $form.perSecInput.value = Math.floor((sec % 60) * 1000) / 1000;
    $form.perMinInput.value = Math.floor((sec % 3600) / 60);
    $form.perHourInput.value = Math.floor((sec % bodyT) / 3600);
    $form.perDayInput.value = Math.floor(sec / bodyT);
  };
  var snapShot = function(select) {
    if (this.snapOpt[0] && this.snapOpt[1] &&
    this.snapOpt[2] && this.snapOpt[4]) {
      this.snapOpt[3] = select;
      this.input = new snapInput(this.snapOpt);
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
      this.targAltInput.value = Math.ceil(
        this.minOrbit.target.altM * 1000) / 1000;
    }

    snapShot.call($form, $form.targAltInput.value);

    if (this.input.deploy.Ap > this.maxOrbit.deploy.Ap &&
    this.userBody.soiRadM) {
      console.log('Too high, setting maxAlt.');
      this.targAltInput.value = Math.floor(
        this.maxOrbit.target.altM * 1000) / 1000;
      snapShot.call($form, $form.targAltInput.value);
    }
    popTime(this.input.target.per, this.userBody.siderealDayS);
    console.log('Acceptable altitude. Time set.');
  } else {
    var bodySec = this.userBody.siderealDayS;
    var secTot = parseTime(bodySec);
    if (secTot < this.minOrbit.target.per) {
      console.log('Too low, setting minimum period.');
      secTot = this.minOrbit.target.per;
    }
    snapShot.call($form, secTot);

    if (secTot > this.maxOrbit.deploy.per && this.userBody.soiRadM) {
      console.log('Too high, setting max period.');
      secTot = this.maxOrbit.deploy.per;
      snapShot.call($form, secTot);
    }
    console.log('Acceptable period. Alt updated.');
    popTime(secTot, bodySec);
    this.targAltInput.value = Math.floor(this.input.target.altM * 1000) / 1000;
  }
  if (typeof callback === 'function') {
    callback();
  }
  this.resultClear();
  return this;
};
