const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle incoming array
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  // Check if data is provided in the request body
  if (!data || !Array.isArray(data) || data.length !== 5) {
    return res.status(400).json({ is_success: false, message: 'Invalid data format' });
  }

  // Extracting required information from data
  const userId ="kunal_0809_2110990809";
  const emailId = "kunal0809.be21@chitkara.edu.in";
  const collegeRollNumber = "2110990809";

  // Filtering even and odd numbers from the data
  const evenNumbers = data.filter(num => parseInt(num) % 2 === 0);
  const oddNumbers = data.filter(num => parseInt(num) % 2 !== 0);

  // Filtering alphabets and converting to uppercase
  const alphabets = data.filter(char => typeof char === 'string' && char.length === 1 && /^[a-zA-Z]$/.test(char));
  const uppercaseAlphabets = alphabets.map(char => char.toUpperCase());

  // Prepare and send response
  const response = {
    is_success: true,
    user_id: userId,
    email: emailId,
    roll_number: collegeRollNumber,
    even_numbers: evenNumbers,
    odd_numbers: oddNumbers,
    alphabets: uppercaseAlphabets
  };

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
