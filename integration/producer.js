// integration/middleware/producer.js
const amqp = require('amqplib');

async function sendLoanRequest() {
  try {
    // 1. Connect to RabbitMQ Server (Local instance)
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'loan_approval_queue';
    await channel.assertQueue(queue, { durable: false });

    // 2. Define sample loan requests
    const loanRequests = [
      { borrower: "Juan Dela Cruz", amount: 30000, term: "12 months" },
      { borrower: "Maria Santos", amount: 75000, term: "24 months" },
      { borrower: "Pedro Penduko", amount: 45000, term: "6 months" }
    ];

    // 3. Enqueue requests
    loanRequests.forEach((request) => {
      const message = JSON.stringify(request);
      channel.sendToQueue(queue, Buffer.from(message));
      console.log(`Loan request submitted: ${JSON.stringify(request)}`);
    });

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500);

  } catch (error) {
    console.error("Error in Producer:", error);
  }
}

sendLoanRequest();