function narcissistic(value) {
  // Code me to return true or false

  let digits = Array.from(String(value),Number);
  let last = digits.length;
  // return last;
  // let sum =0;
  let sum = digits.reduce((acc,curr)=>acc+Math.pow(curr,last),0);
  return sum===value;
}

console.log(narcissistic(1652));