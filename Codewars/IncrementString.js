function incrementString (strng) {
  let lastchar = strng[strng.length-1];
  if (lastchar === '0') {
    return strng.slice(0, strng.length-1) + '1';
  }

  let patern = /[0-9]/;
  let newlastchar = [];
  let nonNumbers = '';

  for (let i = strng.length - 1; i >= 0; i--) {
    if (patern.test(strng[i])) { 
      newlastchar.push(strng[i]);
    } else {
      nonNumbers = strng.slice(0, i + 1); 
      break;
    }
  }

  if (newlastchar.length === 0) return strng + '1';

  newlastchar = newlastchar.reverse();

  let firstNonZeroIndex = newlastchar.findIndex(char => char !== '0');

  if (firstNonZeroIndex === -1) {
    let zeros = newlastchar.slice(0, -1).join('');
    return nonNumbers + zeros + '1';
  }

  let zeros = newlastchar.slice(0, firstNonZeroIndex).join('');
  let nonZeros = newlastchar.slice(firstNonZeroIndex).join('');
  
  let incremented = (Number(nonZeros) + 1).toString();

  if (incremented.length > nonZeros.length && zeros.length > 0) {
    zeros = zeros.slice(0, -1);
  }

  return nonNumbers + zeros + incremented;
}

console.log(incrementString('foo'))//-> foo1
