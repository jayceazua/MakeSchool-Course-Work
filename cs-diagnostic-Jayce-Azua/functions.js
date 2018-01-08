// # Solution to Problem 6
function fibonacci_iterative (num) {
	var a = 1, b = 0, temp;

  	while (num >= 0){
	    temp = a;
	    a = a + b;
	    b = temp;
	    num--;
  }

  return b;
}

// * Solution to Problem 7
function factorial_recursive (num) {
	var fac = []
	var total = 1;
	for(var  i = num; i > 0; i--) {
		fac.push(i);
	}
	for(var i = 0; i <= fac.length; i++) {
		total = total * fac[i];
	}

	return total;
}

// #Solution to Problem 13

let  roll  = () => {
	let num = Math.floor(Math.random() * 6) + 1;
	return num; 

}

