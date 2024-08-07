require('dotenv').config();

const express = require('express');

const cors = require('cors');

const cookieParser = require('cookie-parser')

const router = require('./routes/');

const db = require('./db');

const app = express();

app.use(cors({
  origin: process.env.URL,
  credentials: true,
}));

app.use(express.json());

app.use(cookieParser());

app.use('/api',router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

