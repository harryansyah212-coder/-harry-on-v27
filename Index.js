const express = require("express");
const app = express();

app.use(express.json());

function harryPipeline(input) {
  return {
    objective: input,
    thinking: "Analisis sederhana input",
    risk: "Perlu validasi data",
    execution: "Eksekusi berdasarkan objective",
    evaluation: "OK"
  };
}

app.post("/chat", (req, res) => {
  const input = req.body.input;
  const result = harryPipeline(input);
  res.json(result);
});

app.get("/", (req, res) => {
  res.send("HARRY ON V27 ACTIVE");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("HARRY ON V27 RUNNING");
});
