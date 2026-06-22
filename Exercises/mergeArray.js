const arr= [1,2,3];
const array= [4,5,6];

function merge(arr1,arr2){
  let merge= [...arr1,...arr2];
  merge.unshift(0);
  merge.push(7);
  return merge;
}

console.log(merge(arr,array));