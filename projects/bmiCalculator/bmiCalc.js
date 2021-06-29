// BMI Calculator function

function bmiCalc (w, h){
  let bmi = w / (h**2) * 703;
  bmi = parseFloat(bmi).toFixed(2);
  document.getElementById("bmi").innerHTML = "BMI: " + bmi;
  if(bmi <= 18.5){
    document.getElementById("results").innerHTML = "Weight Status: Underweight";
  } else if (bmi <= 25){
    document.getElementById("results").innerHTML = "Weight Status: Normal";
  } else if (bmi <= 30){
    document.getElementById("results").innerHTML = "Weight Status: Overweight";
  } else {
		document.getElementById("results").innerHTML = "Weight Status: Obese";
  }
}

// info and string to int conversion
var userHeight = prompt("What is your height (In Inches)?");
var userWeight = prompt("What is your weight (In Pounds)?");
parseInt(userHeight, userWeight)

bmiCalc(userWeight, userHeight)
