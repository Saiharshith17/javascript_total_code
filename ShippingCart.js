class ShippingCart{
    constructor(){
        this.items=[];
        this.discountStrategy=null;
    }

    addProduct(product){
        this.items.push(product);
    }

    setDiscountStrategy(strategy){
        this.discountStrategy=strategy;
    }

    calculateTotal(){
        let total=this.items.reduce((sum,product)=>sum+product.price,0);
        
        if(this.discountStrategy){
            return this.discountStrategy.applyDiscount(total);
        }
        return total;
    }

}
module.exports=ShippingCart;