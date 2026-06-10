export default function handler(req, res) {

  const input = req.body?.input || "";

  const response = {
    objective: input,
    thinking: "Analisis input secara sederhana",
    risk: "Perlu validasi input dan dependensi",
    execution: "Menjalankan proses untuk: " + input,
    evaluation: "OK"
  };

  res.status(200).json(response);
}
