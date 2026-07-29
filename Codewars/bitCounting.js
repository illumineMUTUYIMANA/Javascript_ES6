function countBits(n) {
  if(n===0)return 0;
  if(n===1)return 1;
  if (n%2 ===0 && n<10){
    return 1;
  }
  let arr = [];
  while (n>1){
    let rem =n%2;
    arr.push(Math.floor(rem));
    n=n/2;
  }
  let count =0;
  for (let num of arr){
    if (num===1){
      count++;
    }
  }
  
  return count;
}
console.log(countBits(1));