function isValidIP(str) {
  let str1= str.split('');
  for(let el of str1){
    if (el === ' '){
      return false;
    }
  }
  let pattern = /['\n']/;
  if (pattern.test(str)){
    return false;
  }
  let splited = str.split('.');
  if(splited.length<4 || splited.length>4){
    return false;
  }
  for (let el of splited){
    let patttern2 =/[a-zA-Z]/;
    if (el.length>1 && el[0]==='0'){
      return false;
    }else if(el>255 || el<0){
      return false;
    }else if(patttern2.test(el)){
      return false;
    }else if(el===''){
      return false
    }
  }


  return true;
}
console.log(isValidIP('.251.167.137'));