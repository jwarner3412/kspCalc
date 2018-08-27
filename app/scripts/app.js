// Call for datafile with promises
const buildApp = function(obj) {
  obj.insertForm()
}

let getData = (url) => {
  let request = fetch(url)
    .then(response => response.json())
    .then(json => json.forEach(element => console.log(element)))
    .catch(e => console.log(e))
}
let requests = [fetch('./data.json'), fetch('./ui.html')]

let req = getData('./data.json')
console.log(req[0])

Promise.all(requests)
  .then(res => console.log(res))
  .catch(e => console.log(e))


// 1. add table and input fields
const formObj = {
  insertForm: function() { 
    document.getElementById( this.container ).innerHTML = this.formHtml()
  },
  returnHandles: function() {
    let x = Object.assign(this.handles)
    for (const key in x) {
      x[key] = document.getElementById(x[key])
    }
    return x
  },
  container: 'calcWrap',
  handles: {
    doMaths: 'doMaths',
    solSelect: 'solSelect',
    bodySelect: 'bodySelect',
    precInput: 'precInput',
    satCount: 'satCount',
    targBySelect: 'targBySelect',
    targAltInput: 'targAltInput',
    perDayInput: 'perDayInput',
    perHourInput: 'perHourInput',
    perMinInput: 'perMinInput',
    perSecInput: 'perSecInput',
    perInput: 'perInput',
    depPe: 'depPe',
    depAp: 'depAp',
    results: 'results',
    helpButton: 'helpButton',
    helpWrap: 'helpWrap',
    helpClose: 'helpClose',
  },
}

// 2. bind to inputs

// 4. set default values
//     a. do math for rest / use stored min/max values?, fill in opposing fields, disable applicable inputs
// 4. set event triggers
// buildApp(formObj)