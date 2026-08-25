function encode(input) {
  let arr = [];
  for (let i=0;i<input.length;i++){
    let count = 1;
    for (let j=i+1;j<input.length;j++){
      if (input[i]===input[j]){
        count+=1;
      }
      if (input[j]!==input[i]){
        break;
      }
    }arr.push(count,input[i]);
    i+=count-1;
  }
  return arr.join('');
  
}

function decode(input) {
  let input1 = input.split(/[a-zA-Z]/);
  let result =[];
  for (let i=0;i<input.length;i++){
    if (/[a-zA-Z]/.test(input[i])){
      for (let j=0;j<input1.length;j++){
        for (let n = 1; n<=Number(input1[j]);n++){
          result.push(input[i]);
        }break;
        
        
      }input1.shift();
    }else{
      continue;
    }
    
  }
  return result.join('');
}
console.log(encode('AAAAAAAAAAB'));

console.log(decode('10A1B'));