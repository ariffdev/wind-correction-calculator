 //to compute the performance for the maximum legal wind, just assume wind is 2m/s
 
 function zeroadjust100m(mark, wind){
  adjusted =  mark - (0.0449 * wind) + (0.009459 * mark * wind) - (0.0042 * Math.pow(wind, 2));
  return adjusted.toFixed(2)
 }


function zeroadjust200m(mark, wind){
  adjusted =  mark + (0.09 * wind) - (0.01 * Math.pow(wind, 2));
  return adjusted.toFixed(2);
}


function zeroadjustSprintHurdles(mark, wind){
  adjusted = mark + (0.093 * wind) - (0.01 * Math.pow(wind, 2));
  return adjusted.toFixed(2);
}

function zeroadjustLongJump(mark, wind){
  adjusted = mark - (0.029 * wind);
  return adjusted.toFixed(2);
}

function zeroadjustTripleJump(mark, wind){
  adjusted =  mark - (0.069 * wind) + (0.009 * Math.pow(wind, 2));
  return adjusted.toFixed(2);
}
