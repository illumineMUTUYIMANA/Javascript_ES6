function deleteNth(arr,n){
  let objCount = {};
  for (let el of arr){
    objCount[el] =(objCount[el]||0)+1;
  }
  for (let key in objCount){
    while(objCount[key]>n){
      for (let i=arr.length-1; i>=0;i--){
        if (Number(key)===arr[i]){
          arr.splice(i,1);
          objCount[key]-=1;
          break;
        }
        
      }
    }
  }

  return arr;

}
console.log(deleteNth([12,39,19,39,39,19,12],1));