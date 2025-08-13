class State{
    constructor(order){
        this.order=order;
    }
    processOrder() { console.error('Cannot process order in the current state.'); }
  shipOrder() { console.error('Cannot ship order in the current state.'); }
  deliverOrder() { console.error('Cannot deliver order in the current state.'); }
  cancelOrder(){
    console.log(`Order is now being Cancelled`);
    this.order.setState(new CancelledState(this.order));
  }
}


class PendingState extends State{
    processOrder(){
        console.log('Order is being Processed');
        this.order.setState(new ProcessingState(this.order));
    }

}

class ProcessingState extends State{
    shipOrder(){
        console.log("Order is being shipped");
        this.order.setState(new ShippingState(this.order));
    }
}

class ShippingState extends State{
    deliverOrder(){
        console.log("Order is being Delivered");
        this.order.setState(new DeliveredState(this.order));
    }
    
}
class DeliveredState extends State{
    cancelOrder(){
        console.error(`Order cannot be cancelled now as it is delivered`);
    }
}

class CancelledState extends State{
    cancelOrder(){
        console.error(`Order has already cancelled`);
    }
}

module.exports={
    State,
    ProcessingState,
    PendingState,
    ShippingState,
    CancelledState,
    DeliveredState
}
