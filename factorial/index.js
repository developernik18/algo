let inputForFactorial = document.querySelector('#inputForFactorial');

inputForFactorial.addEventListener('input', displayFactorial);

function calculateFactorial(n) {
  let factorial = 1;
  for(let i=n; i>0; i--) {
    factorial *= i;
  }

  return factorial;
}

function isPositiveValue(n) {
  if(n > 0) {
    return n;
  }
  return;
}

function displayFactorial(e) {
  let factorialResult = document.querySelector('.factorial-result span');
  let number = isPositiveValue(parseInt(e.target.value));
  if(number) {
    factorialResult.innerHTML = calculateFactorial(number);
  } else {
    factorialResult.innerHTML = ""
  }
}