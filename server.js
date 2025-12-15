const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// 静态网页
app.use(express.static('public'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Hello World app running on port ${PORT}`);
});

