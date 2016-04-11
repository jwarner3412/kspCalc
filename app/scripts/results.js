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

  var HtmlResult = function(obj) {
    var u = [' s', ' m', ' m/s'];
    var dAp = $form.setDec(obj.deploy.Ap).toLocaleString() + u[1];
    var dPe = $form.setDec(obj.deploy.Pe).toLocaleString() + u[1];
    var dS = $form.setDec(obj.deploy.per).toLocaleString() + u[0];
    var dT = recTime(obj.deploy.time);
    var dSMA = $form.setDec(obj.deploy.semiMajAxis).toLocaleString() + u[1];
    var dSpd = $form.setDec(obj.deploy.obtSpdPE).toLocaleString() + u[2];
    var reqDV = $form.setDec(obj.deploy.circDVreq).toLocaleString() + u[2];

    var tAlt = $form.setDec(obj.target.altM).toLocaleString() + u[1];
    var tS = $form.setDec(obj.target.per).toLocaleString() + u[0];
    var tT = recTime(obj.target.time);
    var tSMA = $form.setDec(obj.target.semiMajAxis).toLocaleString() + u[1];
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

    var sP = rS + 'Period: ';

    var blank = rS + mid + rE;

    var depHd = hdSt + dep + hdEn;
    var tarHd = hdSt + tar + hdEn;

    var dString = tStart;
    dString += depHd;
    dString += rS + 'Apoapsis: ' + mid + dAp + rE;
    dString += rS + 'Periapsis: ' + mid + dPe + rE;
    dString += blank;
    dString += sP + mid + dS + rE;
    dString += sP + mid + dT + rE;
    dString += blank;
    dString += rS + 'Semi-Major-Axis: ' + mid + dSMA + rE;
    dString += rS + 'Speed@Periapsis: ' + mid + dSpd + rE;
    dString += blank;
    dString += rS + 'Required Circ dV: ' + mid + reqDV + rE;
    dString += tEnd;
    this.dString = dString;

    var tString = tStart;
    tString += tarHd;
    tString += rS + 'Circular Alt: ' + mid + tAlt + rE;
    tString += blank;
    tString += sP + mid + tS + rE;
    tString += sP + mid + tT + rE;
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

$form.resultClear = function() {
  console.log('Clearing Results');
  this.results.innerHTML = '';
};
