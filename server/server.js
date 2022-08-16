const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend_react/build')));

app.get("/api", (req, res) => {
    res.json({message: `Fake api key is ${process.env.FAKE_API_KEY}!!!`})
});

// For any GET requests that are not handled, return to home page (Needs to be last)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend_react/build', 'index.html'));
});

app.listen(port, () => {console.log(`Server started on port ${port}`)});