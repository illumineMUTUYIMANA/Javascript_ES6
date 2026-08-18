function pigLatin(string){
  let consonat = 'abcdefghijklmnopqrstuvwxyz';
  let vowel = /[aiuoe]/;
  let str ='';
  string = string.toLowerCase();
  let nonWord = /\W/;
  let num = /[0-9]/;
  if(nonWord.test(string))return null;
  if (num.test(string))return null;
  if(!(vowel.test(string))){
    return string.concat('ay');
  }else if(vowel.test(string[0])){
    return string.concat('way');
  }else if (!vowel.test(string[0])){
    for (let char =0;char<string.length;char++){
      if (vowel.test(string[char])){
        str = string.slice(0,char);
        let string1= string.replace(str,'');
        return string1.concat(str,'ay');
      }
    }
  }
  return string;
}


console.log(pigLatin('mp3at'));