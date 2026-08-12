function solve(s) {
  s= s.split('');
  let left =0;
  let right =0;
  for (let el of s){
    if(el ==='('){
      left+=1;
    }else{
      right+=1;
    }  
  }
  if (left!==right){
    sum=left+right;
    if((sum)%2===0){
      return left>right?((sum/2)-right)+2:((sum/2)-left)+2;
    }else{
      return -1;
    }
  }


  //return s;
}console.log(solve(')()('));