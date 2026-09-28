const alertQueue = require("./queue");

const sensorReadings = [
  {
    id: 1,
    sensor: "pH Sensor",
    value: 4.2,
    threshold: 5.5
  },
  {
    id: 2,
    sensor: "Water Level Sensor",
    value: 30,
    threshold: 40
  },
  {
    id: 3,
    sensor: "EC Sensor",
    value: 2.0,
    threshold: 1.5
  }
];

sensorReadings.forEach(reading => {

  alertQueue.push(reading);

  console.log(
    `Sensor reading submitted: ${JSON.stringify(reading)}`
  );

});

console.log("Sensor alerts queued...");