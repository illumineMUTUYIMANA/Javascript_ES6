function duplicateEncode(word){
  word = word.toLowerCase();
  let result=[];
  for(let i=0;i<word.length;i++){
    let count =1;
    for (let j =0;j<word.length;j++){
      if(i===j)continue;
      if(word[i]===word[j]){
        count+=1;
      }
    }
    if (count===1){
        result.push('(');
      }else{
        result.push(')');
      }
  }
    return result.join('');
}

console.log(duplicateEncode("(( @"))