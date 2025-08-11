class FixedDiscount{
    constructor(amount){
        this.amount=amount;
    }
    applyDiscount(total){
       const finalPrice=total-this.amount;
       return finalPrice>0?finalPrice:0;

    }
}

class PercentageDiscount{
    constructor(percent){
        this.percent=percent;
    }
    applyDiscount(total){
        if(this.percent>=0&&this.percent<=100){
        const finalPrice=total*(1-this.percent/100);
        return finalPrice;
        }
        return total; 
    }
}

module.exports={
    FixedDiscount,
    PercentageDiscount

}