describe("fizzBuzz", function() {

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  it('Fizz when a number is divisable by 3', function() {
    expect(fizzBuzz.says(3)).toEqual("Fizz")
  });
  it('Buzz when a number is divisable by 5', function() {
    expect(fizzBuzz.says(5)).toEqual("Buzz")
  });
  it('FizzBuzz when a number is divisable by 15', function() {
    expect(fizzBuzz.says(15)).toEqual("FizzBuzz")
  });
  it('Returns the number', function() {
    expect(fizzBuzz.says(1)).toEqual(1) });
  it('Returns the numbers')

});
