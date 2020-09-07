require('dotenv').config();
const express = require('express');
const cors = require('cors');

const apiRoutes = require('./routes/api');

console.log(process.env)

const app = express();
const PORT = 3001;

app.disable('x-powered-by');

app.use(cors());
app.use('/api', apiRoutes);

app.listen(PORT);
