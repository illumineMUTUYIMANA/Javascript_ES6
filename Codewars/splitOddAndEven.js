function splitOddAndEven(n) {
  n = n.toString().split('');
  let numbers =[];
  for (let character of n){
    numbers.push(Number(character));
  }
  let reults=[];
  for (let i=0;i<numbers.length;i++){
    let even = [];
    let odd = [];
    if (numbers[i]%2===0&&numbers[i+1]%2===0){
     even.push(numbers[i],numbers[i+1]);
     i++;
     reults.push(even.join());
    }else if (numbers[i]%2===0 &&numbers[i++]!==0 ){
      reults.push(numbers[i]);
    }else if (numbers[i]%2!==0&&numbers[i++]%2!==0){
      odd.push(numbers[i],numbers[i++]);
      i++;
      reults.push(odd.join());
    }else if(numbers[i]%2!==0 &&numbers[i+1]%2===0){
      reults.push(numbers[i]);
    }
  }
  
  

  return reults;
  
}

console.log(splitOddAndEven(522354679367))







function splitOddAndEven(n) {
    n=Array.from(String(n),Number);
    let odd =[];
    let even =[];
    // for (let num of n){
    //     if(num%2===0){
    //         even.push(num);
    //     }else{
    //         odd.push(num);
    //     }
    // }
    for (let i=0;i<n.lenght;i++){
        for(let j=i+1;j<n.lenght;j++){
            if(n[i]%2===0){
                even.push(n[i]);
                
                if(n[j]%2===0){
                    even.push(n[j]);
                }else if(n[j]%2!==0){
                    break;
                }
                even.push(n[i],n[j])
                
            }else{
                odd.push(n[i])
                if (n[j]%2===0){
                    break;
                }else{
                    odd.push(n[j])
                }
                
            }
        }
    }
    return [[...odd],[...even]];
}

console.log(splitOddAndEven(135246));