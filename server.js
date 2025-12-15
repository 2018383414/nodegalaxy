const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// API：获取 IP 信息
app.get('/api/ip', async (req, res) => {
  try {
    const response = await fetch('http://ip-api.com/json');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch IP info' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server1 running on port ${PORT}`);
});

