export default function handler(req, res) {

  const input = req.body?.input || "";

  function harryPipeline(input) {
    return {
      objective: input,
      thinking: `Analisis: ${input}`,
      risk: "Cek dependency & validasi input",
      execution: `Eksekusi rencana untuk: ${input}`,
      evaluation: "OK"
    };
  }

  const result = harryPipeline(input);

  res.status(200).json(result);
}
