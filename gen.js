
function digPow(n,p){
  num= n.toString().split('');
  let sum = 0;
  for (let i=0;i<num.length;i++){
    sum += Number(num[i])**p;
    p++
  }

  let k=sum/n;
  if (sum%n!==0){
    return -1;
  }
  return k;


}
console.log(digPow(123,3))