function sumPairs(ints, s) {
  let checked = new Set();
  for (let el of ints){
    let secondNum = s-el;
    if (checked.has(secondNum)){
      return [secondNum,el];
    }
    checked.add(el);
  }return undefined;

}

console.log(sumPairs([1, 2, 3, 4, 1,0], 2));