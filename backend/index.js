const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.get('/api/intern', (req, res) => {
  res.json({
    name: "Yashfeen Raavi",
    referralCode: "yashfeenraavi2025",
    donations: 1240,
    rewards: ["T-shirt", "E-Certificate", "Webinar Invite"],
    leaderboard: [
      { name: "Yashfeen Raavi", donations: 1500 },
      { name: "Kiara", donations: 1240 },
      { name: "Aayat", donations: 950 }
    ]
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
