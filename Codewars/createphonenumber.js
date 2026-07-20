function createPhoneNumber(numbers){
  let first =[];
  let second=[];
  let third =[];
  for(let i=0;i<numbers.length;i++){
    if (i<=2){
      first.push(numbers[i]);
    }else if(i>2 && i<=5){
      second.push(numbers[i]);
    }else{
      third.push(numbers[i]);
    }
    
  }
  first=`(${first.join('')})`;
  second = ` ${second.join('')}`;
  third = `-${third.join('')}`;
  let results = [...first,...second,...third];
  return results.join('');
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));// => returns "(123) 456-7890"