const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Example data
const menu = [
  {
    id: 1,
    name: 'Dish 1',
    description: 'Description of Dish 1',
    price: 10.99,
    image: 'https://example.com/dish1.jpg',
  },
  // Add more dishes here...
];

app.get('/menu', (req, res) => {
  res.json(menu);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
