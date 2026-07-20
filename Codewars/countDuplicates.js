function duplicateCount(text){
  let arrOfChar = text.split('');
  let count = {};
  for (let char of arrOfChar){
    count[char]=(count[char]||0)+1;
  }
  let counts = 0;
  for (let n in count){
    if (count[n]>1){
      counts+=1;
    }
  }
  return counts;
  
}
console.log(duplicateCount("aabbBdcfs"));