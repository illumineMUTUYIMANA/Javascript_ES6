const orders= [
  { customer:"Ali", product:"Laptop" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Laptop" },
  { customer:"John", product:"Keyboard" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Monitor" }
];

function createReport(order){
  let prod = [];
  for(let obj of order){
    prod.push(obj.product)
  }
  let unique = [...new Set([...prod])];
  let len = unique.length;
  let ob1 = {
    uniqueProducts:unique,
    firstProduct:unique.shift(),
    totalUnique: len
  };

  return {uniqueProducts,firstProduct,totalUnique}=ob1;
}
console.log(createReport(orders));