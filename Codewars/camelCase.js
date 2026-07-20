function toCamelCase(str){
  if (str ===''){
    return '';
  }
 let split = str.split(/[-_]/g);
 let results =[];
 let upper ='';

 for (let i=0; i<split.length; i++){
  if(i===0){
    results.push(split[i]);
  }
  else{
    upper =split[i][0].toUpperCase();
    results.push(upper+split[i].slice(1));
  }
  
 }
 return results.join('');
}

console.log(toCamelCase("the-stealth-warrior"));
