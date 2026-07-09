import express from "express";

const app = express();
const PORT: number = 3000;

app.get("/", (_req, res) => {
  res.json({
    ok: true,
    message: "Agent Backend is running.",
  });
});

app.listen(PORT, () => {
  console.log(`Server configuration initialized on port ${PORT}.`);
});
