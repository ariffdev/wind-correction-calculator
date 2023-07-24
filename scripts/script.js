

const events_coeff_object = {
  e_100m : {alpha: 0.009459, beta: -0.0449, b : -0.0042},
  e_200m : {alpha: 0, beta: 0.090, b : -0.010},
  e_100mH : {alpha: 0, beta: 0.093, b : -0.010},
  e_110mH : {alpha: 0, beta: 0.093, b : -0.010},
  e_LJ : {alpha: 0, beta: -0.029, b : 0},
  e_TJ : {alpha: 0, beta: -0.069, b : 0.009},
}


function correction(event_selected, mark, wind){
  let alpha = events_coeff_object[event_selected].alpha;
  let beta = events_coeff_object[event_selected].beta;
  let b = events_coeff_object[event_selected].b;
  return ((beta + alpha * mark) * wind) + (b * Math.pow(wind, 2));
}

function compute(event_selected, mark, wind){
  let zeroAdjustedMark = mark + correction(event_selected, mark, wind);
  let correctionZerotoTwo = correction(event_selected, mark, wind=2);
  let maxLegalPerformance = zeroAdjustedMark - correctionZerotoTwo;

  return [zeroAdjustedMark.toFixed(2), maxLegalPerformance.toFixed(2)];
}


window.addEventListener("click",()=> {
  let event_selected = document.getElementById('event-selector').value;
  let wind = Number(document.getElementById('wind-selector').value);
  let mark = Number(document.getElementById('mark-selector').value);

  if (event_selected == 'e_TJ' || event_selected == 'e_LJ'){
    document.getElementById('adjusted-mark-unit-1').innerText = 'm';
    document.getElementById('adjusted-mark-unit-2').innerText = 'm';
  }

  document.getElementById('zero-adjusted-mark-output').innerText = compute(event_selected, mark, wind)[0];
  document.getElementById('max-legal-performance-output').innerText = compute(event_selected, mark, wind)[1];
})









