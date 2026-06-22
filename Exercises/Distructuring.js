let person ={
  name:'Ange',
  age:34,
  education:{
    univ:'UoK',
    year:2,
    fuculty:'IT'
  }
}

let{name,age}=person;
console.log(name);
console.log(age);

// changing variable name to fname 

let {name:fname,age:yOld}=person;

console.log("the name and age in other variables");
console.log(`fname: ${fname}`);
console.log(`yOld: ${yOld}`);


// Accessing property of a nested object and changing its variable name.
let{education}=person;
console.log(education);
let {education:{univ}}=person
console.log(`univ: ${univ}`)

let {name:name1,education:{univ:school}}=person;
console.log(`school:${school}`);