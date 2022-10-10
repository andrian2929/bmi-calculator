document
  .getElementById("form-submit")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    clearAlert();
    clearResult();
    if (weight == "" && height == "") {
      document.getElementById("alert-weight").innerHTML =
        "Isi berat badan terlebih dahulu";
      document.getElementById("alert-height").innerHTML =
        "Isi tinggi badan terlebih dahulu";
    } else if (weight == "") {
      document.getElementById("alert-weight").innerHTML =
        "Isi berat badan terlebih dahulu";
    } else if (height == "") {
      document.getElementById("alert-height").innerHTML =
        "Isi tinggi badan terlebih dahulu";
    } else {
      let bmi = calculateBMI(weight, height);
      let category = getCategory(bmi);
      document.getElementById("card").style.display = "block";
      document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(
        2
      )}, and you are ${category}`;
    }
  });

function clearAlert() {
  document.getElementById("alert-weight").innerHTML = "";
  document.getElementById("alert-height").innerHTML = "";
}

function clearResult() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("card").style.display = "none";
}

function calculateBMI(weight, height) {
  let bmi = weight / Math.pow(height / 100, 2);
  return bmi;
}

function getCategory(bmi) {
  let category = "";
  if (bmi < 18.5) {
    category = "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "overweight";
  } else if (bmi >= 30 && bmi <= 39.9) {
    category = "obesity";
  } else if (bmi >= 40) {
    category = "extreme obesity";
  }
  return category;
}
