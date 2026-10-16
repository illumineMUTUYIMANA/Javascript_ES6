function pigIt(str) {
  let arrStr = str.split(' '); 
  
  let result = arrStr.map(word => {
    if (/[a-zA-Z]/.test(word)) {
      let char = word.split('');
      let first = char.shift();
      
      return char.join('') + first + 'ay';
    }
    
    return word;
  });
  
  return result.join(' '); 
}
