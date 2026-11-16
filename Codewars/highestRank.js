function highestRank(arr){
  let counter = {};
  for(let i = 0;i<arr.length;i++){
    counter[arr[i]]= (counter[arr[i]]||0)+1
  }
  let max = Math.max(...Object.values(counter));
  let highest = []
  for (let n in counter){
    if(counter[n]===max)highest.push(Number(n));
  }
  return Math.max(...highest);
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12] ));