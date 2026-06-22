  var unbalancedNode = {value: 11,
     left: {value: 0, left: null, right: null},
    right: {value: 0, left: null, right: {value: 1, left: null, right: null}}
  };

function sumTheTreeValues(root){
  let sum = 0;
  for (let prop in root){
    if (typeof(root[prop])==='number'){
      
      sum+=root[prop];
    }else if (typeof(root[prop])==='object'){
      sum += sumTheTreeValues(root[prop]);
    }
  
  }return sum;
}

console.log(sumTheTreeValues(unbalancedNode));