// class person{
//   constructor(name,byear,id){
//     this.name = name;
//     this.byear = byear;
//     this.id= id;
//   }

//   getage(cyear){
//     let ages = cyear - this.byear;
//     return ages;
//   }

//   out(){
//     return `Hello ${this.name} you are ${this.getage(2026)} years old, with this ID ${this.id} thanks`;
//   }
// }

// p1 = new person('Illuminee',2004,1234);
// console.log(p1.out());

// console.log(typeof([1,2,3]));



class parent{
  constructor(name,age,address){
    this.name = name;
    this.age = age;
    this.address = address
  }

  out(){
    return`you are welcome ${this.name}`;
  }
}

class child extends parent{
  constructor(fname,name,age,address){
    super(name,age,address)
    this.fname = fname;

  }

  out1(){
    return `hi ${this.fname}. your parent are ${this.name} and your address is ${this.address}.`
  }
}
p1 = new parent('kabalisa',33,'kibagabaga');
c1 = new child('Kabalisa',12,'gishushu','Ange');
console.log(p1.out());
console.log(c1.out1());
// const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
// console.log(games);
//console.log(p1.hasOwnProperty(out()));
console.log(p1.hasOwnProperty('name'));




