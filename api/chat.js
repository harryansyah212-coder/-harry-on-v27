import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {

  const sql = neon(process.env.DATABASE_URL);

  const input = req.body?.input || "";

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

  res.status(200).json({
    objective: input,
    thinking: "Processing with Neon memory system",
    risk: "Check DB connection",
    execution: "Saved to database",
    evaluation: "OK"
  });
}
