function encode(input) {
  let obj ={};
  for (let char of input){
    obj[char] = (obj[char]||0)+1;
  }
  for (let char=0;char<input.length;char++){
    
  }
  return obj;
  
}

function decode(input) {
  
}


console.log(encode('AAABBBCCCA'));