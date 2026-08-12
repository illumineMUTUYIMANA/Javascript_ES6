// function toWeirdCase(string){
//   let array = string.split(' ');
//   let results =[];
//   for (let word of array){
//     let arr=[];
//     for (let i=0;i<word.length;i++){
//       if (i===0){
//         arr.push(word[i].toUpperCase());
//       }else if(i%2===0){
//         arr.push(word[i].toUpperCase());
//       }else{
//         arr.push(word[i].toLowerCase());
//       }
//     }results.push(arr.join(''));
//   }

//   return results.join(' ');
// }
// console.log(toWeirdCase('Weird string case'))


function ipvalid(ip){
  let pat = /[a-zA-Z/i]/;
  if(pat.test(ip)){
    return false;
  }else{
    return true;
  }
}
console.log(ipvalid('02345K9'));