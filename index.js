const express = require('express')
require('dotenv').config();
const cors = require('cors')
const port = 5000 || process.env.PORT;
const connectToMongo = require('./dbConfig')

const app = express();
app.use(express.json());
app.use(cors())

connectToMongo();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/post', require('./routes/post'));
app.use('/api/comment', require('./routes/comment'))

app.listen(port, () =>{ 
    console.log("App is listening on port ",port);
})
