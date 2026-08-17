console.clear();
const prompt = require('prompt-sync')();
// const/let/var
const store = "Rambo Store";
console.log(store);

// store = "Rockey Store";

// let item1 = "Mobile";
// let item2 = "Shoes";
// inventory
let items = ["item1","item2","item3"];
let prices = [2000,5000,3000];

console.log(items.length);

items.push("item4", "item5");
// items.pop();
console.log(items);

// customer oriented biling
console.log("Biling System");
console.log();
prices.push(3000,3500);
console.log("SrNo.\t","Item\t","Price");
for( let i=0 ; i< items.length ; i++) {
    console.log((i+1)+"\t",items[i],"\t",prices[i]);
}
console.log();
let srno = Number(prompt("Enter Item No. : "));
let quantity = Number(prompt("Enter Quantity : "));

// biling
let price = prices[srno-1];
let cost = price*quantity;
let discount =0;
if(cost >= 5000) { let discount = cost*0.05;}
else if( cost >=2000 ){let discount = cost*0.2;}
else { discount = cost*0.01;}
console.log("your discount is : ", discount);
console.log("Your Bill Amount is : ", cost-discount);

console.log();