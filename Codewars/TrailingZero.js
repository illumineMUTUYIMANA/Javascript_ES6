function zeros (n) {
 let factorial = facto(n);
  let count =0;
   factorial =factorial.toString().split('');
  let array = [];
  for (let dig of factorial){
    array.push(Number(dig));
  }
  for (let el = array.length-1; el>=0;el-- ){
    if(array[el]===0){
      count+=1;
    }else{
      break;
    }
  }
  return count;
}
function facto (n) {
  let factorial =1n;
  for (let i=1;i<=n;i++){
    factorial*=BigInt(i);
  } 
  return factorial;
}
console.log(zeros(30));