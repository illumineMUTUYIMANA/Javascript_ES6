function digitalRoot(n) {
  let digits = n.toString().split('');
  let sum = 0;
  for (let dig of digits){
    sum+=Number(dig);
  }
  if (sum<10){
    return sum;
  }else{
  let res = digitalRoot(sum);
  return res;
  }
}

console.log(digitalRoot(493193));