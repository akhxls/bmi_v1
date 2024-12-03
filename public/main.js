function actualResult() {
  let result = weight.value / (height.value / 100) ** 2;
  if (result < 18.5) {
    pararesult.innerHTML = `<h1 class="text-red-600 text-center">Underweight</h1>`;
  } else if (result >= 18.5 && result <= 24.9) {
    pararesult.innerHTML = `<h1 class="text-green-500 text-center">Normal Weight</h1>`;
  } else if (result >= 25 && result <= 29.9) {
    pararesult.innerHTML = `<h1 class="text-orange-600 text-center">Overweight</h1>`;
  } else if (result >= 30 && result <= 34.9) {
    pararesult.innerHTML = `<h1 class="text-red-600 text-center">Obesity (Class 1)</h1>`;
  } else if (result >= 35.0 && result <= 39.9) {
    pararesult.innerHTML = `<h1 class="text-red-600 text-center">Obesity (Class 2)</h1>`;
  } else if (result >= 40) {
    pararesult.innerHTML = `<h1 class="text-red-600 text-center">Obesity (Class 3 / Severe)</h1>`;
  }
}
