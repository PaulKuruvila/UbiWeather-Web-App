const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend_react/public')));

app.listen(port, () => {console.log(`Server started on port ${port}`)});