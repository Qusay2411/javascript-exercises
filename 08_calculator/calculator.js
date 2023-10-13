const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(arr) {
  let ans = 1;
  arr.forEach((element) => {
    ans*=element;
  });
  return ans
};



const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let ans=1
	if (n === 0) {
    return 1
  }
  else {
    for (let i = 1; i<=n;i++){
      ans*=i;
    }
  }
  return ans;
};

factorial(10);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
