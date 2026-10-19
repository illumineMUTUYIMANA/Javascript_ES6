function sumDigPow(a, b) {
  // Your code here

  let nums = [];
  let results = [];
  
  for(let x= a;x<=b;x++)nums.push(x);
  for (let num of nums){
    let sum =0;
    if(num.toString().length ===1){
      results.push(num);
    }else if(num.toString().length >1){
      let str = Array.from(String(num),Number);
      for (let n =0; n<str.length; n++){
        sum+= Math.pow(str[n],n+1);
        if(sum===num) results.push(sum);
      }

      //return sum;
    
    }
  }
  return results;
}

console.log(sumDigPow(1,100));