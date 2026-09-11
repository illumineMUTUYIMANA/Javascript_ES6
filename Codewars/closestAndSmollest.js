function closest(strng) {
  if (strng.length === 0) return [];
  
  let words = strng.split(' ');
  
  let items = words.map((str, index) => {
    let weight = str.split('').reduce((acc, curr) => acc + Number(curr), 0);
    return {
      weight: weight,
      index: index,
      value: Number(str)
    };
  });

  let weights = items.map(item => item.weight).sort((a, b) => a - b);
  
  let min = weights[1] - weights[0];
  for (let i = 0; i < weights.length - 1; i++) {
    let dif = weights[i + 1] - weights[i];
    if (dif < min) {
      min = dif;
    }
  }

  let lastWeight = [];
  for (let i = 0; i < weights.length - 1; i++) {
    if ((weights[i + 1] - weights[i]) === min) {
      lastWeight.push(weights[i], weights[i + 1]);
      break;
    }
  }

  let results = [];
  for (let item of items) {
    if (item.weight === lastWeight[0] || item.weight === lastWeight[1]) {
      results.push([item.weight, item.index, item.value]);
    }
  }

  if (results[0][0] === results[1][0]) {
    results.sort((a, b) => a[1] - b[1]);
    return results.slice(0, 2);
  } else {
    results.sort((a, b) => a[0] - b[0]);
    return results.slice(0, 2);
  }
}

console.log(closest("348335 151 28275 132 1527 14 436126 13 133407 67 151713 3 161931 143 49308 168 302363 95 22576 53 193550 26 53479 14 209459 32 490629 25 469306 199 41"));
