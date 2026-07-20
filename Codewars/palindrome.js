function palindrome(num){ 
  if (typeof(num)!=='number')return "Not valid";

  let num1=Array.from(num.toString());
  let arr = num1.map(n=>Number(n));
  // num1.forEach((num, index)=>num1[index]=Number(num));
  let palind = [];
  for (let i=0; i<arr.length; i++){
    if(arr[i]===arr[i+1]){      
      palind.push(arr[i],arr[i++]);
       
      i++;
      break;
    }     
    
  }
  return palind;
}
console.log(palindrome(1222333333758696959));