var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let arr =[];
  for (let i=0;i<iterable.length; i++){
   if(arr[arr.length-1]!==iterable[i]){
    arr.push(iterable[i]);
   }
  }return arr;
}

console.log(uniqueInOrder([1,2,2,3,3]) )//== ['A', 'B', 'C', 'D', 'A', 'B']