const Product=require("./product");
const ShippingCart=require("./ShippingCart");
const {FixedDiscount,PercentageDiscount}=require("./Discount");

const item1=new Product("item1",5000);
const item2=new Product("item2",5000);
const cart1= new ShippingCart();
cart1.addProduct(item1);
cart1.addProduct(item2);
const percentage=new PercentageDiscount(10);
cart1.setDiscountStrategy(percentage);
console.log(cart1.calculateTotal());
const fixed=new FixedDiscount(2000);
cart1.setDiscountStrategy(fixed);
console.log(cart1.calculateTotal());