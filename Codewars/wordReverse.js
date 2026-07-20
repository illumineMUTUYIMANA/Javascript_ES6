function spinWords(string){
  let words = string.split(' ');
  let correct = [];
  for (let word of words){
    if (word.length>5){
      let letters = word.split('');
      let reversed = letters.reverse().join('');
      correct.push(reversed);
    }else{
      correct.push(word)
    }
  }return correct.join(' ');
}
console.log(spinWords('This is another test'));