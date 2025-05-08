const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Web của bạn đang chạy trên Koyeb 24/7!');
});

app.listen(port, () => {
  console.log(`Server đang chạy tại cổng ${port}`);
});
