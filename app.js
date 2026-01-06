import express from 'express';

const app = express();

/* =======================
   SECURITY ISSUES
======================= */

// ❌ Hardcoded credential (Security Hotspot)
const DB_PASSWORD = "password123";

// ❌ Insecure randomness (Vulnerability)
function generateToken() {
  return Math.random().toString(36);
}

/* =======================
   CODE SMELLS
======================= */

// ❌ Unused variable
const unusedValue = 42;

// ❌ Function always returns same value
function alwaysTrue() {
  return true;
}

/* =======================
   BUGS
======================= */

app.get('/parse', (req, res) => {
  // ❌ Unhandled exception
  const data = JSON.parse(req.query.data as string);
  res.send(data);
});

/* =======================
   VULNERABILITIES
======================= */

app.get('/query', (req, res) => {
  // ❌ User input directly used (Injection risk)
  const sql = `SELECT * FROM users WHERE id = ${req.query.id}`;
  res.send(sql);
});

/* =======================
   MAINTAINABILITY
======================= */

app.get('/nested', (req, res) => {
  // ❌ Cognitive complexity too high
  if (alwaysTrue()) {
    if (true) {
      if (true) {
        if (true) {
          res.send('Too complex');
        }
      }
    }
  }
});

/* =======================
   PERFORMANCE ISSUE
======================= */

app.get('/loop', (req, res) => {
  // ❌ Blocking event loop
  for (let i = 0; i < 1e9; i++) {}
  res.send('Done');
});

/* =======================
   SERVER SETUP
======================= */

// ❌ Magic number (Code Smell)
const PORT = 3000;

app.listen(PORT, () => {
  // ❌ Console log in production code
  console.log(`Server running on port ${PORT}`);
});
