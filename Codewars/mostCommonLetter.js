function replaceCommon(string, letter) {
  // good luck

  let str = string.split('');
  let count = {};
  for(let char of str){
    if(char.trim() === ""){
      continue;
    }else{
      count[char] =(count[char]||0)+1;
    }
    
  }
  let values = Object.values(count);
  let max =Math.max(...values);
  let commonChar = [];
  for(let char in count){
    if (count[char]===max)commonChar.push(char);
  }
  let newString = ""
  for(let letters of str){
    if(letters===commonChar[0]){
      newString+=letter;
    }else{
      newString+=letters;
    }
  }
  return newString;
}

console.log(replaceCommon('my mom loves me as never did','t'));