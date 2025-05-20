const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const certRoutes = require('./certRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', certRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
