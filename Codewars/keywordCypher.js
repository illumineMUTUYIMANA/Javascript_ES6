function keywordCipher(string, keyword) {
  let char=string.toLowerCase().split('');
  let arrOfString = string.split(' ');
  let pat= 'abcdefghijklmnopqrstuvwxyz'.split('');
  let nonUsed= '';
  let nonDuplicateword= [...new Set(keyword)];

  for(let letter of pat){
    if(nonDuplicateword.includes(letter)){
      continue;
    }else{
      nonUsed+=letter;
    }
  }
  let result=[];
  let objMap={};
  let encrypt= nonDuplicateword.join('') + nonUsed;
  for(let i=0;i<pat.length;i++){
    objMap[pat[i]] = encrypt[i];
  }
  for (let letter of char){
    if(letter===' '){
      result.push(letter);
    }else{
      for(let key in objMap){
        if(letter===key){
          result.push(objMap[key]);
        }
    }
    }

  }


  return result.join('');
}
console.log(keywordCipher("alpha bravo charlie", "delta")); //"djofd eqdvn lfdqjga"