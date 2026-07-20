// class product{
//   constructor(id,name,basePrice){
//     this.id = id,
//     this.name = name,
//     this.basePrice = basePrice
//   }

//   get price(){
//     return Number(this.basePrice.toFixed(2));
//   }


//    set price(newPrice){
//     if (newPrice<0){
//       throw new Error(`Price cannot be negative`);
//     }
//     this.basePrice = newPrice;
//    }

// }

// class DiscountedProduct extends product{
//   constructor(discountPercentage,id,name,basePrice){
//     super(id,name,basePrice);
//     this.discountPercentage =discountPercentage ;
//   }
//   get price(){
//     let discountPrice = super.price - ((this.basePrice*this.discountPercentage)/100);
//     return discountPrice;
//   }
// }

// class ShoppingCart{
//   constructor(items){
//     this.items = [];
//   }
//   static MAX_ITEMS = 5 ;

//   addItem(product){
//     if (this.items.length === ShoppingCart.MAX_ITEMS){
//       return 'cart is full!';
//     }
//     this.items.push(product);

//   }

//   calculateTotal(){
//     let total = 0;
//     for(let el of this.items){
//       total += el.price;
//     }return total;
//   }
// }

// const book = new product(1, "JS Guide", 29.99);
// //book.price = 700;
// const laptop = new DiscountedProduct(15,2, "Laptop", 1000);
// console.log(`Laptop Price (after 15% off): $${laptop.price}`);
// console.log(`The price of book is ${book.price}`);

// try {
//   book.price = -5;
// } catch (err) {
//   console.log(`Caught expected error: ${err.message}`); // Should trigger negative error
// }

// const cart = new ShoppingCart();
// cart.addItem(book);
// cart.addItem(laptop);

// console.log(`Cart Total: $${cart.calculateTotal()}`); // Should be 879.99



function sort(str) {
  let leters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
  let newstr = str.replace(/\s/g, '').split('');
  let chars = [];
  let num = [];
  let special =[];
  for (let chr of newstr){
    if(/[a-zA-Z]/.test(chr)){
      chars.push(chr);
    }else if(/[0-9]/.test(chr)){
      num.push(chr)
    }else{
      special.push(chr);
    }
  }
  chars.sort((a,b)=>leters.indexOf(a)-leters.indexOf(b));
  num.sort((a,b)=>a-b);
  special.sort((a,b)=>a-b);
  
  return [...chars,...num,...special].join('');
}

console.log(sort('“Happy 21st Birthday!”'));


