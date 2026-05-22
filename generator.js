// function* getEmployee() {
//     console.log('the function has started');

//     const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

//     for (const name of names) {
//         console.log(name);
//     }

//     console.log('the function has ended');
// }

// console.log(getEmployee().next());

function* createSundae() {
    const toppings = [];
    
    toppings.push(yield);
    toppings.push(yield);
    toppings.push(yield);
    
    return toppings;
}

var it = createSundae();
it.next('hot fudge');
console.log(it.next('sprinkles'));
it.next('whipped cream');
console.log(it.next());