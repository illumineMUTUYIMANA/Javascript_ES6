function divisibleCount(x, y, k) {
  let results = [];
  for (let i=x;i<=y;i++){
    if (i%k===0){
      results.push(i);
    }
  }return results.length;
  
}

console.log(divisibleCount(6,11,2));