const {PendingState}=require("./State")

class Order{
    constructor(){
        this.id=Math.floor(Math.random()*1000);
        this.observers=[];
        this.state=new PendingState(this);
        console.log("new Order created, starting in pending state");
        
    }
    subscribe(observer){
       if(!this.observers.includes(observer)){
        this.observers.push(observer);
       }
    }
    unsubscribe(observer){
       this.observers=this.observers.filter(subscriber => subscriber!==observer);
    }

    notify(){
        this.observers.forEach((subscriber)=>subscriber.update(this));

    }
    setState(newState){
        this.state=newState;
        console.log(`Order ${this.id} state changed to: ${newState.constructor.name}`);
       this.notify();
    }
    processOrder(){
        this.state.processOrder();
    }
    shipOrder(){
        this.state.shipOrder();
    }
    deliverOrder(){
        this.state.deliverOrder();
    }
    cancelOrder(){
        this.state.cancelOrder();
    }
}
module.exports=Order;