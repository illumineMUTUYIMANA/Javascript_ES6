function persistence(n){

  
  
  let results =  [];
  
  while(n>=10){
    
    let num = n.toString().split('');
    let answer = 1;
    for (let digit of num){
      answer *= Number(digit);
      
      
    }results.push(n);
    n=answer;
  }

  return results.length;

}

console.log(persistence(999));