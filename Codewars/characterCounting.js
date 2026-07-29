function count(string) {
  let obj = {};
  for(let char of string){
    obj[char]=(obj[char]||0)+1;
  }
  return obj;
}
console.log(count('abaaaabBooo'));