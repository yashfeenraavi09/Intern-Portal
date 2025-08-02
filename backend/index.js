const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Yashfeen Raavi",
    referralCode: " yashfeenraavi2025",
    donations: 1240,
    rewards: ["T-shirt", "E-Certificate", "Webinar Invite"],
    leaderboard: [
      { name: "Yashfeen Raavi", donations: 1500 },
      { name: "Kiara", donations: 1240 },
      { name: "Aayat", donations: 950 }
    ]
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
