const items = [
  { type: 'fruit' },
  { type: 'vegetable' },
  { type: 'fruit' },
  { type: 'fruit' },
  { type: 'vegetable' },
  { type: 'grain' },
];


//console.log(counts); // Output: { fruit: 3, vegetable: 2, grain: 1 }

function groupByAndCount(arr){
  let arr1=[];
  for (let el of arr){
    for (let k in el){
      arr1.push(el[k]);
    }
  }//return arr1;
  let obj={};
  for(let i of arr1){
    obj[i]= (obj[i]||0)+1;
  }return obj;
}
console.log(groupByAndCount(items));