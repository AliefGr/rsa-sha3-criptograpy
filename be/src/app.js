const cors = require('cors')
const express = require("express");
const { createSignature, verifySignature } = require("./signature");
const app = express();
const port = 3001;


// Tambahkan middleware CORS
app.use(cors());

// Atur header khusus jika perlu (opsional)
app.use(cors({
    origin: 'http://localhost:5173', // URL frontend
    methods: ['GET', 'POST'],       // Metode yang diizinkan
    allowedHeaders: ['Content-Type'] // Header yang diizinkan
}));

app.use(express.json());

// Endpoint untuk membuat tanda tangan
app.post('/sign', (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ error: "Data is requared" });
  }
  const signature = createSignature(data);
  res.json({ data, signature });
});

// Endpoint untuk memverifikasi tanda tangan digital
app.post("/verify", (req, res) => {
  const { data, signature } = req.body;
  if (!data || !signature) {
    return res.status(400).json({ error: "Data and signature are required" });
  }

  const isValid = verifySignature(data, signature);
  res.json({ data, signature, isValid });
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`serever berjalan di http://localhost:${port}`);
});
