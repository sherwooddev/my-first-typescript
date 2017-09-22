var findSum = function(firstValue: number, secondValue: number) {
  var sum: number = firstValue + secondValue;
  alert("The sum of your numbers is: " + sum);
}

var firstNumber: number = parseInt(prompt('Please enter a number.'));
var secondNumber: number = parseInt(prompt('Please enter another number.'));
findSum(firstNumber, secondNumber);
