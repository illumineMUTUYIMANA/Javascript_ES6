function multiplicationTable(size) {
 let table = [];
 for (let i=1;i<=size; i++){
  let singleTable = [];
  for(let j=1;j<=size;j++){
    singleTable.push(i*j);
  }
  table.push(singleTable);
  
 }
  return table // insert code here
}
console.log(multiplicationTable(4)) //[[1, 2, 3], [2, 4, 6], [3, 6, 9]]