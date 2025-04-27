// server.js (Backend)
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for EC2 frontend
app.use(cors());

// Set up database connection (MySQL in this example)
const db = mysql.createConnection({
  host: 'database-2.c142g8o62se8.ap-southeast-1.rds.amazonaws.com', // Ganti dengan host database kamu
  user: 'admin', // Ganti dengan username database
  password: 'Mrikzixbox1', // Ganti dengan password database
  database: 'ecommerce' // Ganti dengan nama database
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Endpoint untuk mengambil data dari database
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM products'; // Ganti dengan query yang sesuai
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});