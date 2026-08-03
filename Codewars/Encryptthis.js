var encryptThis = function(text) {
  text = text.split(' ');
  let results =[];
  for (let word of text){
    let code =word.charCodeAt(0);
    let rest = word.slice(1);
    rest=rest.split('')//.reverse().join('');
    let first =rest[0];
    let last =rest[rest.length-1];
    rest[0]=last;
    rest[rest.length-1]=first;
    let fin =code+rest.join('');
    results.push(fin);

  }
  return results.join(' ');
}

console.log(encryptThis("A wise old owl lived in an oak")); //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"))