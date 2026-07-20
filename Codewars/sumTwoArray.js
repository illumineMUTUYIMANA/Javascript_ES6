let A =[3,2];
let B= [7,8];

function addArrays(array1, array2) {

  if (array1.length ===0 || array2.length===0){
    return array1.length===0? array2:array1;
  }else if(array1.length ===0 && array2.length===0){
    return [];
  } 
  let arrayToNumber1 = parseInt(array1.join(''));
  let arrayToNumber2 = parseInt(array2.join(''));
  let sum = arrayToNumber1 + arrayToNumber2;
  let results = [];
  let arr = sum.toString().split(''); 
  for (let num of arr){
    if (num==='-'){
      results.push(num);
    }else{
      results.push(Number(num));
    }
    
  }
  let first ;
  if (results[0] === '-'){
    first = results.slice(0,2).join('');
    results.splice(0,2,Number(first))
  }
  return results;
}

console.log(addArrays(A,B));