const Order = require('./Order');
const NotificationService=require("./NotificationService");
// You will need to import your State and Observer classes here

// --- Setup Observers ---
const notificationService = new NotificationService();


// --- Create an Order ---
const myOrder = new Order();

// --- Subscribe Observers to the Order ---
myOrder.subscribe(notificationService);


// --- Process the Order through its lifecycle ---
myOrder.processOrder(); // Should move from Pending to Processing
myOrder.shipOrder();     // Should move from Processing to Shipped
myOrder.deliverOrder();  // Should move from Shipped to Delivered

// --- Try an invalid action ---
myOrder.cancelOrder();  