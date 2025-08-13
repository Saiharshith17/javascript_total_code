// You will need to import your MessageQueue, Producer, and Consumer classes.

// 1. Create the central message queue
const messageQueue = new MessageQueue();

// 2. Create Consumers with unique names
const emailService = new Consumer('EmailService');
const analyticsService = new Consumer('AnalyticsService');
const loggingService = new Consumer('LoggingService');

// 3. Subscribe consumers to various topics
messageQueue.subscribe('USER_SIGNUP', emailService);
messageQueue.subscribe('USER_SIGNUP', analyticsService);
messageQueue.subscribe('ORDER_PLACED', analyticsService);
messageQueue.subscribe('ORDER_PLACED', loggingService);

// 4. Create a Producer that is connected to the queue
const producer = new Producer(messageQueue);

// 5. Producer sends messages to different topics
console.log("--- Publishing messages ---");
producer.sendMessage('USER_SIGNUP', { userId: 123, email: 'user@example.com' });
// Expected Output (order may vary):
// EmailService received message on topic USER_SIGNUP: { userId: 123, email: 'user@example.com' }
// AnalyticsService received message on topic USER_SIGNUP: { userId: 123, email: 'user@example.com' }

console.log(""); // for spacing

producer.sendMessage('ORDER_PLACED', { orderId: 456, amount: 99.99 });
// Expected Output (order may vary):
// AnalyticsService received message on topic ORDER_PLACED: { orderId: 456, amount: 99.99 }
// LoggingService received message on topic ORDER_PLACED: { orderId: 456, amount: 99.99 }