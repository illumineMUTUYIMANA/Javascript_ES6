a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];


function comp(array1, array2){
  if (array1===null && array2===null) return null;
  if (array1===null||array2===null) return false;
  if (array1.length !== array2.length)return false;
  let array = array2.map(a=>Math.sqrt(a));

  array1 = array1.sort((a,b)=>a-b);
  array = array.sort((a,b)=>a-b);
  for (let num=0;num<array1.length;num++){
   if(array1[num] !== array[num]){
     return false;
   }
  }
 return true;
}
console.log(comp(a,b))