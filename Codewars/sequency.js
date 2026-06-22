// Description:

// An array might have many values. These are ordererd in a specific way. However,
//  it's possible to display them in other order.
// Your Task

// Given a multi-dimensional array of integers, your goal is to find how many
//  ways you can arrange that same array, so that the values are in a different sequence.


function findCombo(array){
  let newArr = [];
  
  for (let a=0;a<array.length;i++){
    let arr = [];
    let n =array[a];
    array[a] = array[a+1];
    array[a+1]=n;
    arr.push(arr[a],arr[a+1])
    return arr[a+1];
  }

}

console.log(findCombo([1,2,4]))