const express = require("express");
const router = express.Router();

let sensorReadings = [
  {
    id: 1,
    sensorName: "Soil Moisture Sensor 1",
    moistureLevel: 35,
    temperature: 29,
    status: "Dry"
  },
  {
    id: 2,
    sensorName: "Soil Moisture Sensor 2",
    moistureLevel: 68,
    temperature: 27,
    status: "Normal"
  }
];

// GET /sensors - Retrieve all sensor readings
router.get("/", (req, res) => {
  res.status(200).json(sensorReadings);
});

// POST /sensors - Add a new sensor reading
router.post("/", (req, res) => {
  const {
    sensorName,
    moistureLevel,
    temperature,
    status
  } = req.body;

  if (
    !sensorName ||
    moistureLevel === undefined ||
    temperature === undefined ||
    !status
  ) {
    return res.status(400).json({
      message:
        "sensorName, moistureLevel, temperature, and status are required"
    });
  }

  const newReading = {
    id: sensorReadings.length
      ? sensorReadings[sensorReadings.length - 1].id + 1
      : 1,
    sensorName,
    moistureLevel,
    temperature,
    status
  };

  sensorReadings.push(newReading);

  res.status(201).json(newReading);
});

module.exports = router;