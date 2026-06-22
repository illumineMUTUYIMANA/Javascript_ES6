function findIndexOfSubArray(arr) {
  let result = [];
  let newarr = arr.sort((a,b)=>a-b);
  for (let m=0;m<arr.length;m++){
    for(let n=arr.length-1;n>0;n--){
      let subArr = arr.slice(m,n);
      let sotSub = subArr.sort((a,b)=>a-b);
      let orSot = newarr.slice(m,n);
      if (sotSub === orSot){
        result.push(m,n);
      }
    }
  }return result;
}