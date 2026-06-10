export default function handler(req, res) {

  const input = req.body?.input || "";

  res.status(200).json({
    objective: input,
    thinking: "Analisis input",
    risk: "Validasi input diperlukan",
    execution: "Menjalankan proses untuk: " + input,
    evaluation: "OK"
  });
}
