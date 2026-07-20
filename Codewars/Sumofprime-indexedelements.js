function total(arr){
  let sum=0;
  for (let i=0;i<arr.length;i++){
    if (i<2)continue;
    let isPrime = true;
    for (k=2;k<=Math.sqrt(i);k++){
      if (i%k===0){
        isPrime=false;
        break;
      }
    }if(isPrime) sum+=arr[i];
   
    
  }return sum;
}
console.log(total([1,2,3,4,5,6,7,8,9,10,11,12,13]));