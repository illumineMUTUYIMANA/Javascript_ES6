function findMissingLetter(array){
  let small= 'abcdefghijklmnopqrstuvwxyz';
  let big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i=0;i<array.length;i++){
    for (let j=0;j<small.length;j++){
      if (array[i] === small[j]){
        if(array[i+1]===small[j+1]){
          continue;
        }
        else if (array[i+1]!==undefined){
          array.splice(i+1,0,small[j+1]);
          i++;
          return small[j+1];
        }else{
          break;
        }

      }
    }
    for (let j=0;j<big.length;j++){
      if (array[i] === big[j]){
        if(array[i+1]===big[j+1]){
          continue;
        }
        else if (array[i+1]!==undefined){
          array.splice(i+1,0,big[j+1]);
          i++;
          return big[j+1];
        }else{
          break;
        }

      }
    }
    // if(small.includes(array[i])|| big.includes(el)){
    //   let cur = arr[i];
    //   let next = arr[i+i]

    // }
  }

}
console.log(findMissingLetter([ 'S','T','U','V','X']));