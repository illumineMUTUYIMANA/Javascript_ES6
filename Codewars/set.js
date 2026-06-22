// let names = new Set(['illuminee', 'mutuyimana', 'ange','rukamba']);
// console.log(typeof(names));
// console.log(names.entries());

// names.add('mukayi');
// console.log(names.has('illuminee'))
// console.log(names);
// console.log(names.size)
// for(let el of names){
//   console.log(el);
// }
// let iterables = names.keys();
// console.log(iterables.next());
// console.log(iterables.next());
// console.log(iterables.next());
// console.log(iterables.next());
// console.log(iterables.next());
// console.log(iterables.next());

// let myFavoriteFlavors = new Set([]);
// myFavoriteFlavors.add('chocolate chip');
// myFavoriteFlavors.add('cookies and cream');
// myFavoriteFlavors.add('strawberry');
// myFavoriteFlavors.add('vanilla');
// myFavoriteFlavors.delete('strawberry')

// console.log(myFavoriteFlavors);

// function nthSmallest(...arrays ) {
//   let n = arrays.pop();
//   let arr = Array.from(arrays);
//   let arr1 = [];
//   for(let i=0;i<arr.length;i++){
//     if (Array.isArray(arr[i])){
//       for(let el of arr[i]){
//         arr1.push(el);
//       };
//     }
//   }arr1.sort((a,b)=>a-b);
//   return arr1[n-1];
// }

// console.log(nthSmallest([1,5], [2], [4,8,9],4));



function max(...xx){
  let arr = [...xx];
  for(let el of arr){
    arr.push(el);
  }
  let sorted = arr.sort((a,b)=>a-b);
  max = sorted.pop();
  
  return max;
}

function min(xx){
  if (typeof(xx)==='string'){
    xx = xx.split('');

  }
  let sorted = xx.sort((a,b)=>a-b);
  min = sorted.shift();
  
  return min;
}

console.log(max('ange'))
console.log(min('ange'))