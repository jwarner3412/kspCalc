// builds the results table based on a snapShot
$form.resultHandler = function(inputObj) {
  var recTime = function(t) {
    var u = ['d', 'h', 'm', 's'];
    var c = ' ';
    var str = '';
    t.forEach(function(element, i, array) {
      if (element) {
        str += element + u[i] + c;
      }
    });
    return str;
  };

  // output constructor function for results print
  var HtmlResult = function(obj) {
    var u = [' s', ' m', ' m/s'];
    var dAp = Math.round(obj.deploy.Ap).toLocaleString() + u[1];
    var dPe = Math.round(obj.deploy.Pe).toLocaleString() + u[1];
    var dS = $form.setDec(obj.deploy.per).toLocaleString() + u[0];
    var dT = recTime(obj.deploy.time);
    var dSMA = Math.round(obj.deploy.semiMajAxis).toLocaleString() + u[1];
    var dSpd = $form.setDec(obj.deploy.obtSpdPE).toLocaleString() + u[2];
    var reqDV = $form.setDec(obj.deploy.circDVreq).toLocaleString() + u[2];

    var tAlt = Math.round(obj.target.altM).toLocaleString() + u[1];
    var tS = $form.setDec(obj.target.per).toLocaleString() + u[0];
    var tT = recTime(obj.target.time);
    var tSMA = Math.round(obj.target.semiMajAxis).toLocaleString() + u[1];
    var tSpd = $form.setDec(obj.target.orbSpeed).toLocaleString() + u[2];

    var tStart = '<table><tbody>';
    var rS = '<tr><td>';
    var mid = '</td><td>';
    var rE = '</td></tr>';
    var tEnd = '</tbody></table>';

    var hdSt = '<thead><th colspan="2">';
    var dep = 'Deployment Orbit Data';
    var tar = 'Final Target Orbit Data';
    var hdEn = '</th></thead>';

    var sP = rS + 'Period';
    var tP = sP;
    sP += '(seconds): ';
    tP += '(d:h:m:s): ';

    var blank = rS + mid + rE;

    var dString = tStart;
    dString += hdSt + dep + hdEn;
    dString += rS + 'Apoapsis: ' + mid + dAp + rE;
    dString += rS + 'Periapsis: ' + mid + dPe + rE;
    dString += blank;
    dString += sP + mid + dS + rE;
    dString += tP + mid + dT + rE;
    dString += blank;
    dString += rS + 'Semi-Major-Axis: ' + mid + dSMA + rE;
    dString += rS + 'Speed@Periapsis: ' + mid + dSpd + rE;
    dString += blank;
    dString += rS + 'Required Circ dV: ' + mid + reqDV + rE;
    dString += tEnd;
    this.dString = dString;

    var tString = tStart;
    tString += hdSt + tar + hdEn;
    tString += rS + 'Circular Alt: ' + mid + tAlt + rE;
    tString += blank;
    tString += sP + mid + tS + rE;
    tString += tP + mid + tT + rE;
    tString += blank;
    tString += rS + 'Semi-Major-Axis: ' + mid + tSMA + rE;
    tString += rS + 'Orbital Speed: ' + mid + tSpd + rE;
    tString += tEnd;
    this.tString = tString;
  };

  this.snapRes = new HtmlResult(inputObj);
  var fullString = this.snapRes.dString + this.snapRes.tString;
  document.getElementById('results').innerHTML = fullString;
};

// clears results
$form.resultClear = function() {
  console.log('Clearing Results');
  this.results.innerHTML = '';
};
