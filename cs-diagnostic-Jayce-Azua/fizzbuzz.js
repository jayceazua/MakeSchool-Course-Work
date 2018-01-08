// PseudoCode for Fizzbuzz
// Questions 4 and 5
//  create a function that takes in two inputs
function fizzbuzz(start, end) {
// create a for loop where i = start and will loop until it reaches the end
	for(var i = start; i <= end; i++) {
// create a if statement where it meet the requirements of fizz, buzz, and fizz buzz
		// check if it is divisible by 3
		if(i % 3 === 0 ){
			console.log("fizz");
			// check if it is divisible by 5
		} else if(i % 5 === 0) {
			console.log("buzz");
			// check if it is divisible by 3 and 5
		} else if (i % 3 === 0 && i % 5 === 0) {
			console.log("fizzbuzz");
		} else {
			console.log(i)
		}
	}
}