const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./Model/Config');
const router = require('./Routes/userRoutes');

app.use(bodyParser.json());
app.use('/', router);

app.listen(3000,(req,res)=>{
    console.log(`server is running on port number 3000`);
})