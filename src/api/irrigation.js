const express = require("express");
const router = express.Router();

let irrigationRecords = [
  {
    id: 1,
    zone: "Zone A",
    pumpStatus: "OFF",
    duration: 0,
    mode: "Automatic"
  },
  {
    id: 2,
    zone: "Zone B",
    pumpStatus: "ON",
    duration: 15,
    mode: "Manual"
  }
];

// GET /irrigation - Retrieve all irrigation records
router.get("/", (req, res) => {
  res.status(200).json(irrigationRecords);
});

// POST /irrigation - Add a new irrigation command
router.post("/", (req, res) => {
  const {
    zone,
    pumpStatus,
    duration,
    mode
  } = req.body;

  if (
    !zone ||
    !pumpStatus ||
    duration === undefined ||
    !mode
  ) {
    return res.status(400).json({
      message:
        "zone, pumpStatus, duration, and mode are required"
    });
  }

  const newRecord = {
    id: irrigationRecords.length
      ? irrigationRecords[irrigationRecords.length - 1].id + 1
      : 1,
    zone,
    pumpStatus,
    duration,
    mode
  };

  irrigationRecords.push(newRecord);

  res.status(201).json(newRecord);
});

module.exports = router;