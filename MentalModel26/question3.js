const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
const result = flattenAndUnique(nestedArray);
//console.log(result); // Output: [1, 2, 3, 4, 5]

function flattenAndUnique(arr){
  let flatArray = arr.flat(4).sort((a,b)=>a-b);
  let set = new Set(flatArray);

  return set;
}
console.log(flattenAndUnique(nestedArray))