import express from 'express'; // or use require()
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

// Determine __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend build
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Yashfeen Raavi",
    referralCode: "yashfeenraavi2025",
    donations: 1240,
    rewards: ["T-shirt", "E-Certificate", "Webinar Invite"],
    leaderboard: [
      { name: "Yashfeen Raavi", donations: 1500 },
      { name: "Kiara", donations: 1240 },
      { name: "Aayat", donations: 950 },
    ],
  });
});

// Fallback: always return index.html for frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
