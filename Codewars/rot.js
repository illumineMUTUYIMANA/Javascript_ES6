function rot13(message){
  //your code here
  let small = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let capital = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  let arrMessage = message.split('');
  let word = [];

  for (let i=0;i<arrMessage.length;i++){
    
    let newIndex =small.indexOf(arrMessage[i])+13;
    let newIndexes = capital.indexOf(message[i])+13;

    if(small.includes(message[i])&& newIndex<26){
      // newIndex = (small.indexOf(message[i]))+13;
      word.push(small[newIndex]);
    }else if(small.includes(message[i])&& newIndex>=26){
      newIndex=newIndex-26;
      word.push(small[newIndex]);
    }else if(capital.includes(message[i])&& newIndexes<26){
      word.push(capital[newIndexes]);
    }else if(capital.includes(message[i])&& newIndexes>=26){
      newIndexes = newIndexes-26;
      word.push(capital[newIndexes]);
    }else{
      word.push(arrMessage[i]);
    }

  }
  return word.join('');
}
console.log(rot13('Te!sktaAMN^*H(*(&%^Maddjuias'));//grfg