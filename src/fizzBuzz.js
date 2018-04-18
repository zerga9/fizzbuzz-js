
function FizzBuzz (){};

FizzBuzz.prototype.says = function(number, divisor) {
  if (this.isDivisibleBy(number, 15)) {
    return "FizzBuzz";
  }
  else if (this.isDivisibleBy(number, 5)) {
    return "Buzz";
  }
  else if (this.isDivisibleBy(number, 3)) {
    return "Fizz";
  }
  else {
    return number
  }
};

FizzBuzz.prototype.isDivisibleBy = function(number, divisor){
  if(number % divisor === 0){
    return true;
  }
};
var fizzBuzz = new FizzBuzz();

for (i = 1; i <= 100; i++) {
  console.log(fizzBuzz.says(i));

}
