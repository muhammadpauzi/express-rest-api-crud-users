const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(bodyParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})