const express = require("express");

const sensorsRouter = require("./sensors");
const irrigationRouter = require("./irrigation");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    system: "HYDROSMART",
    message: "HYDROSMART REST API is running",
    endpoints: [
      "GET /sensors",
      "POST /sensors",
      "GET /irrigation",
      "POST /irrigation"
    ]
  });
});

app.use("/sensors", sensorsRouter);
app.use("/irrigation", irrigationRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found"
  });
});

app.listen(PORT, () => {
  console.log(`HYDROSMART API is running at http://localhost:${PORT}`);
});