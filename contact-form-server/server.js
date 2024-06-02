const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/submit', (req, res) => {
  const { nickname, name, surname, email, wishes } = req.body;
  const userData = `Nickname: ${nickname}, Name: ${name}, Surname: ${surname}, Email: ${email}, Wishes: ${wishes}\n`;

  fs.appendFile('users.txt', userData, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Data saved successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
