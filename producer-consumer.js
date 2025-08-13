const messageQueue=new MessageQueue();

class Producer{
    constructor(q){
        this.queue=q;
    }
    sendMessage(topic,payload){
        this.queue.publish(topic,payload);
    }
}

class Consumer{
    constructor(name){
        this.name=name;
    }
    handleMessage(topic,messagePayload){
       console.log(
      `${this.name} received message on topic ${topic}:`,
      messagePayload
    );

    }
}