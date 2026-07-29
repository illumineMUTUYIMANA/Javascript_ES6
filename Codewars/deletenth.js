function deleteNth(arr,n){
  let obj ={};
  for (let i =0; i<arr.length; i++){
    let count =1;
    for (let j=i+1; j<arr.length;j++){
      if (arr[i]===arr[j]){
        count+=1;
        if (count>n){
          arr.splice(j,1);
          j--;
          
          
        }
      }
      i--;
    }
  }
  return arr;
}
console.log(deleteNth([20,37,20,21]));