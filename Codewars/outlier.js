function findOutlier(integers){
  let obj ={
    even:[],
    odd:[]
  }
  for (let inte of integers){
    if (inte%2===0){
      obj.even.push(inte);
    }else{
      obj.odd.push(inte);
    }
  }
  let answer = obj.even.length<obj.odd.length? obj.even:obj.odd;
  
  return answer[0];
}

console.log(findOutlier([1, 2, 3]))