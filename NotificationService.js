class NotificationService{
    update(order){
        console.log(`Notification sent to customer for the order ${order.id}`);
    }
}
module.exports=NotificationService;