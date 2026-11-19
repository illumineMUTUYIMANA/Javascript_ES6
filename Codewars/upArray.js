function upArray(arr){
  if(arr.length===0)return null;
  for(let num of arr){
    if (num<0 || String(num).length>1){
      return null;
    }
  }


  let zeros=[];
  let nonzero = [];
  if(arr[0]===0){
    for (let n=0;n<arr.length;n++){
      if(arr[n]!==0){
        nonzero= arr.slice(n,arr.length);
        zeros = arr.slice(0,n);
        break;
      }
    }
    let num = nonzero.join('');
    let newNum = Number(num)+1;
    let arrayNewNums = Array.from(String(newNum),Number);
    if([...zeros,...arrayNewNums].length===arr.length){
      return [...zeros,...arrayNewNums];
    }else{
      let answer =[...zeros,...arrayNewNums];
      let shifted= answer.shift();
      return answer;
    }
    

   }else{
    let numbers = arr.join('');
    let newNumber = BigInt(numbers)+1n;
    return Array.from(String(newNumber),Number);

  }
}
console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]));