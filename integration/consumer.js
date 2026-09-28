// integration/middleware/consumer.js
const amqp = require('amqplib');

async function processLoanRequests() {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'loan_approval_queue';
    await channel.assertQueue(queue, { durable: false });

    console.log(`[*] Waiting for loan approval requests in '${queue}'. To exit press CTRL+C\n`);

    channel.consume(queue, (msg) => {
      if (msg !== null) {
        const loan = JSON.parse(msg.content.toString());
        
        // Approval Logic: <= 50,000 approved, > 50,000 rejected
        const status = loan.amount <= 50000 ? "Approved" : "Rejected";

        console.log(`Loan request for ${loan.borrower} (Amount: ₱${loan.amount}) → ${status}`);
        
        // Acknowledge receipt of message
        channel.ack(msg);
      }
    });

  } catch (error) {
    console.error("Error in Consumer:", error);
  }
}

processLoanRequests();