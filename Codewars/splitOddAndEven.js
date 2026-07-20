function splitOddAndEven(n) {

  let odd =[];
  let even =[];
  let num = n.toString().split('');
  let nums=[];
  let str ='';

  for (let el of num){
    nums.push(Number(el));
  }
  let kim =[];
  for (let i=0; i<nums.length; i++){
    for (let j=i+1;j<nums.length;j++){
      if (nums[i]%2===0 && nums[j]%2!==0){
        kim.push(nums[i]);
        break;
      }else if(nums[i]%2!==0 && nums[j]%2===0){
        kim.push(nums[i]);
        break;
        i++;
      }
      else if (nums[i]%2===0 && nums[j]%2===0){
        if (odd[odd.length-1]!==nums[i]){
          even.push(nums[i],nums[j]);
          i++;
        }else{
          even.push(nums[i+1]);
          i++;
        }
      }else if(nums[i]%2!==0 && nums[j]%2!==0){
        if (odd[odd.length-1]!==nums[i]){
          odd.push(nums[i],nums[j]);
          // odd= odd.concat(nums[i]).concat(nums[j]);
          i++;
        }//else{
        //   odd.push(nums[j]);
        //   i++;
          
        // }
        while(nums[j]%2==0){
          str=str+nums[i]+nums[j];
        }
        
      }
    }
  }
  return str;
  
}

console.log(splitOddAndEven(522354679367))