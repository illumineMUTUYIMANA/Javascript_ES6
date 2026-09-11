function firstDup(string) {
  let duplicate = [];
  for (let i =0; i<string.length; i++){
    for (let j =i+1;j<string.length;j++){
      if (string[i]===string[j]){
        duplicate.push(string[i]);
      }
    }
  }
  if (duplicate.length===0)return undefined;
  duplicate.sort((a,b)=>string.indexOf(a)-string.indexOf(b));
  return duplicate[0];
  
}

console.log(firstDup('tweet'))