function alphanumeric(string){
  let arr= string.split('');
  let pattern= /[a-zA-Z]/;
  let pattern2 =/[0-9]/;
  for(let el of arr){
    if (pattern.test(el)|| pattern2.test(el)){
      continue;
    }else{
      return false;
    }
  }return true;

}


console.log(alphanumeric("PassW0rd"));