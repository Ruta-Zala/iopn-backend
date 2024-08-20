const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');

const cors = require('cors');
require('./config/db');
require('dotenv').config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Welcome to the Internal Usage Analyser server',
  });
});

app.use('/api',userRouter);

app.listen(port, () => {
  console.log(`Express Js server started at Port:${port}`);
});
