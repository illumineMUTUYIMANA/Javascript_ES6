let items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
             {name:"Freddo", code:"A04", quantity:1, price:0.25},
             {name:"Cheese and Onion Crisps", code:"B06", quantity:0, price:0.67}];



    class VendingMachine {
    constructor(items, money) {
        this.items = items;
        this.money = money
    }

    vend(selection, itemMoney){
        
        for (let obj of this.items){             

            if (selection === obj.code){
            
            if (obj.quantity===0) return `${obj.name} : Out of stock!`

            if(itemMoney===obj.price){
                obj.quantity=obj.quantity-1;
                return `Vending ${obj.name}`;                
            } else if(itemMoney>obj.price){
                obj.quantity=obj.quantity-1;
                return `Vending ${obj.name} with ${(itemMoney-obj.price).toFixed(2)} change.`;
            } else {
                return `Not enough money.`
            }
            
         }
            
          
            
        } 
        return 'Invalid selection : Money in vending machine = 11.20';       
    }
}
let machine = new VendingMachine(items, 500)
console.log(machine.vend("A02", 0.50))

