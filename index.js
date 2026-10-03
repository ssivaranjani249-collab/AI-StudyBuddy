require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// No MongoDB for quick demo - server will run 100%
app.get('/', (req, res) => {
  res.json({ 
    message: 'AI StudyBuddy Backend is Running! 🚀',
    status: 'SUCCESS',
    endpoints: [
      'POST /api/auth/register',
      'POST /api/auth/login',
      'POST /api/ai/summary',
      'POST /api/ai/flashcard',
      'POST /api/ai/quiz'
    ]
  });
});

app.post('/api/auth/register', (req, res) => {
  res.json({ message: "User Registered Successfully! ✅", user: req.body });
});

app.post('/api/auth/login', (req, res) => {
  res.json({ message: "Login Success! ✅", token: "dummy_jwt_token_123" });
});

app.post('/api/ai/summary', (req, res) => {
  const { text } = req.body;
  res.json({ 
    summary: `AI Summary for: ${text || 'your study material'} - This is where Gemini AI will generate summary!`
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ AI StudyBuddy Server running on http://localhost:${PORT}`);
});