const connect = require('./connect');
const express = require('express');
const cors = require('cors');
const doctors = require('./DoctorsRoutes');
const appointments = require('./appointmentRoutes');

const app = express();
const PORT = 3000

app.use(cors());
app.use(express.json());
app.use(doctors)
app.use(appointments)

app.listen(PORT, ()=> {
    connect.connectToServer();
    console.log(`Server is running on port ${PORT}`)
})