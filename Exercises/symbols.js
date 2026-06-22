// let fruit =Symbol.for('apple');
// console.log(Object.keyFor(fruit))
// let color = Symbol('red')
// console.log(fruit)
// console.log(Symbol.for('red'))
// console.log(Symbol.keyFor(fruit))
// console.log('---working with symbols as key in object how they are hidden---')
let id = Symbol('IdOfBookInDatabase');
let log = Symbol('internallogs');
let person  = Symbol.for('apple');
// console.log(fruit===person);

let book={
  title:'Advanced JavaScript',
  othor: 'Illuminee',
  [id]:'01234',
  [log]:'created at 08:20 AM'
};
console.log(book[id]);
console.log(book['title']);
console.log(book[log]);


console.log('<!--inside a for..in loop-->');
for (let prop in book ){
  console.log(prop);              // only title and othor printed out 
}

console.log('<!--how we can extract the hidden symbols of an obkect-->');

hiddenSymbol = Object.getOwnPropertySymbols(book)
console.log(hiddenSymbol);
// console.log(book[hiddenSymbol[1]]);
// console.log()
console.log(Reflect.ownKeys(book));