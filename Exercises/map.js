// let student= new Map();
// student.set('name','illuminee');
// console.log(typeof(student));
// console.log(student);

// let person = new Map();
// person.set(1234567,{
//   name:'ange Kayuhi',
//   location:"Ngoma",
//   maritalStatus:"Maried"
// });

// person.set('name','alphonse');
// person.set('age',17);

// console.log(person);
// console.log(person.get('name'));
// console.log(person.keys());

// person.forEach((value,key)=>
// console.log(`using foreach: ${value}`));

// const members = new Map();

// members.set('Evelyn', 75.68);
// members.set('Liam', 20.16);
// members.set('Sophia', 0);
// members.set('Marcus', 10.25);

// members.forEach((a, b) => console.log(b, a));


let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

for (const role of userRoles.entries()) {
  console.log(`${role[0].name}: ${role[1]}`);
}