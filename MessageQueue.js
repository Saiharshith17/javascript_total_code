
class MessageQueue{
    constructor(){
     this.subscriptions=new Map();
    }
    
    subscribe(topic,consumer){
        const consumers=this.subscriptions.get(topic)||[];
        if(!consumers.includes(consumer)) consumers.push(consumer);
        this.subscriptions.set(topic,consumers);
    }
    publish(topic,messagePayload){
        const consumers=this.subscriptions.get(topic)||[];
        consumers.forEach((consumer)=>{
            consumer.handleMessage(topic,messagePayload);
        });
    }
}






module.exports=MessageQueue;