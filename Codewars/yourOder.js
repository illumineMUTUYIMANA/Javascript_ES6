function order(words){
  word = words.split(' ');
  let arr =[];
  for (let i =0; i<word.length;i++){
    let n=word[i].split('');
    arr.push(n);
  }

  let results = new Array(word.length);
  for(let array of arr){
    for (let char of array){
      let patern= /[0-9]/;
      if (patern.test((Number(char)))){
        results[char-1]=array.join('');
      }
    }
  }

  return results.join(' ');
}
console.log(order('4of Fo1r pe6ople g3ood th5e the2'))