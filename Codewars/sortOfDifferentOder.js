function sortArray(array) {
  let even = array.filter(num=>num%2===0).sort((a,b)=>b-a);
  let odd = array.filter(num=>num%2!==0).sort((a,b)=>a-b);
  console.log(odd);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array[i] = even.shift();
    } else {
      array[i] = odd.shift();
    }
  }

  return array;
}

console.log(sortArray([1, 111, 11, 11, 2, 1, 5, 0])); // [22, 4, 1, 5, 2, 11, 37, 0]