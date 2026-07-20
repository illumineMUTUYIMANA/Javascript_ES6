a =  [[3,4,4,5],[3,4,4,5],[3,4,4,5],[3,4,4,5]];

function sc(arr){
  let obj = {};
  // let flat = arr.flat(Infinity);
  // for (let el of flat){
  //   obj[el]=(obj[el]||0)+1;
  // }

  for (let ar of arr){
    for (let k of ar){
      obj[k]=(obj[k]||0)+1;
    }
  }
  let max = 0;
  for (let p in obj){
    if (obj[p]>max){
      max = obj[p];
    }
    
  }
  let removable = [];
  for (let el in obj){
    if (obj[el]===max){
      removable.push(Number(el));
    }
  }
  for (let array of arr){
    for (let n = 0; n<array.length;n++){
      for (let i of removable){
        if (array[n]===i){
          array.splice(n,1);
          n--;
        }
      }
      
    }
  }return arr;
}

console.log(sc(a))