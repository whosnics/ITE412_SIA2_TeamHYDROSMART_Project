const alertQueue = require("./queue");

function processAlerts() {

  while(alertQueue.length > 0) {

    const reading = alertQueue.shift();

    let result;

    if(reading.value < reading.threshold) {
      result = "Alert Generated";
    } else {
      result = "Normal Reading";
    }

    console.log(
      `${reading.sensor} -> ${result}`
    );
  }
}

setTimeout(processAlerts, 3000);
