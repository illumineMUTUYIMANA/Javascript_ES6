function lettersToNumbers(s) {
  let lower = ' abcdefghijklmnopqrstuvwxyz';
  let upper = lower.toLocaleUpperCase();
  let sum =0;
  let lowerObj = {};
  let upperObj ={};
  for (let c =0; c<lower.length;c++){
    lowerObj[lower[c]]=c
    upperObj[upper[c]]=c*2;
  }
  let pat =/[0-9]/
  for(let char of s){
    if (lower.includes(char)){
      sum+=lowerObj[char];
    }else if(upper.includes(char)){
      sum+=upperObj[char];
    }else if(pat.test(Number(char))){
      sum+=Number(char);
    }else{
      sum+=0;
    }
  }

  return sum;
}
console.log(lettersToNumbers("ARE YOU HUNGRY?"))
