import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  try {
    const sql = neon(process.env.DATABASE_URL);

    const input = req.body?.input || "NO_INPUT";

    // 1. simpan input ke memory
    await sql`
      CREATE TABLE IF NOT EXISTS memory (
        id SERIAL PRIMARY KEY,
        input TEXT
      )
    `;

    await sql`
      INSERT INTO memory (input)
      VALUES (${input})
    `;

    // 2. ambil memory terakhir (context)
    const history = await sql`
      SELECT * FROM memory
      ORDER BY id DESC
      LIMIT 5
    `;

    // 3. response pipeline HARRY ON V27
    res.status(200).json({
      objective: input,
      history: history,
      thinking: "Menganalisis input dengan konteks memory terakhir",
      risk: "Validasi database & payload request",
      execution: "Input disimpan dan history diambil dari Neon DB",
      evaluation: "OK"
    });

  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
      message: error.message
    });
  }
}
