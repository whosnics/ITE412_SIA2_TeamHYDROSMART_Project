// integration/middleware/in_memory_queue.js
const queue = [];

// Producer
function enqueueLoanRequest(borrower, amount, term) {
  const request = { borrower, amount, term };
  queue.push(request);
  console.log(`Loan request submitted: ${JSON.stringify(request)}`);
}

// Consumer
function processQueue() {
  console.log("\n--- Asynchronous Queue Processing ---");
  while (queue.length > 0) {
    const loan = queue.shift(); // Dequeue
    const status = loan.amount <= 50000 ? "Approved" : "Rejected";
    console.log(`Loan request for ${loan.borrower} → ${status}`);
  }
}

// Execution Demo
enqueueLoanRequest("Juan Dela Cruz", 30000, "12 months");
enqueueLoanRequest("Maria Santos", 75000, "24 months");
enqueueLoanRequest("Pedro Penduko", 45000, "6 months");

setTimeout(processQueue, 1000); // Simulate async processing delay