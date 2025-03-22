// AppointmentRoutes.js
const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;

let appointmentRoutes = express.Router();

// Rota para criar um agendamento
appointmentRoutes.route('/appointments').post(async (request, response) => {
    let db = database.getDb();
    let mongoObject = {
        patientName: request.body.patientName,
        selectedDay: request.body.selectedDay,
        selectedHour: request.body.selectedHour,
        selectedMonth: request.body.selectedMonth,
        createdAt: new Date(),
    };

    try {
        let data = await db.collection('Appointments').insertOne(mongoObject);
        response.status(201).json({ message: 'Appointment booked successfully!', data });
    } catch (error) {
        response.status(500).json({ message: 'Error booking appointment', error });
    }
});

// Rota para recuperar todos os agendamentos
appointmentRoutes.route('/appointments').get(async (request, response) => {
    let db = database.getDb();
    let data = await db.collection('Appointments').find({}).toArray();
    if (data.length > 0) {
        response.json(data);
    } else {
        throw new Error("No appointments found :(");
    }
});

module.exports = appointmentRoutes;