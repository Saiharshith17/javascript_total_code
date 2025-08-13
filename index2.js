// You will need to import your coffee and decorator classes here.

console.log('--- Order 1 ---');
let coffee = new Espresso();
console.log(`${coffee.getDescription()} costs ₹${coffee.cost()}`);
// Expected Output: "Espresso costs ₹150"

console.log('\n--- Order 2 ---');
let anotherCoffee = new Decaf();
anotherCoffee = new Milk(anotherCoffee); // Decorating the Decaf with Milk
anotherCoffee = new Sugar(anotherCoffee); // Decorating the coffee+milk with Sugar
console.log(`${anotherCoffee.getDescription()} costs ₹${anotherCoffee.cost()}`);
// Expected Output: "Decaf Coffee, Milk, Sugar costs ₹170"

console.log('\n--- Order 3 ---');
let complexCoffee = new Espresso();
complexCoffee = new Milk(complexCoffee);
complexCoffee = new Whip(complexCoffee);
complexCoffee = new Sugar(complexCoffee);
console.log(`${complexCoffee.getDescription()} costs ₹${complexCoffee.cost()}`);
// Expected Output: "Espresso, Milk, Whip, Sugar costs ₹215"