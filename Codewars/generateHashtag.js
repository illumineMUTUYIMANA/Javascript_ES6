function generateHashtag (str) {
  str = str.trim();
  // return str.length;
  if(str==='')return false;
  let words = str.split(/[\s]+/);
  let newWords = words.map((string)=>{
    let first =string[0].toUpperCase();
    let last = string.slice(1,string.length).toLowerCase();
    return first+last;
  })
  // return ('#'+newWords.join('').length);
  let newWordHashed = '#'+newWords.join('');
  return newWords.join('').length+1>140?false:newWordHashed;

}
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));