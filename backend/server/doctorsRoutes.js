const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;

let doctorsRoutes = express.Router();

//#1 - Retrieve All
//http://localhost:3000/doctors
doctorsRoutes.route('/doctors').get(async (request, response) => {
    let db = database.getDb();
    let data = await db.collection('Doctors').find({}).toArray()
    if (data.length > 0){
        response.json(data)
    }else{
        throw new Error("Data was not found :(")
    }

})

//#2 - Retrieve One
//http://localhost:3000/doctors/1
doctorsRoutes.route('/doctors/:id').get(async (request, response) => {
    let db = database.getDb();
    let data = await db.collection('Doctors').findOne({_id: new ObjectId(request.params.id)})
    if (Object.keys(data).length > 0){
        response.json(data)
    }else{
        throw new Error("Data was not found :(")
    }

})
//#3 - Create One
doctorsRoutes.route('/doctors/').post(async (request, response) => {
    let db = database.getDb();
    let mongoObject = {
        nome: request.body.nome,
        formacao: request.body.formacao,
        biografia: request.body.biografia,
        especialidades: request.body.especialidades,
    };
    let data = await db.collection('Doctors').insertOne(mongoObject)
    response.json(data)

})
//#4 - Update One
doctorsRoutes.route('/doctors/:id').put(async (request, response) => {
    let db = database.getDb();
    let mongoObject = {
        $set:{
            nome: request.body.nome,
            formacao: request.body.formacao,
            biografia: request.body.biografia,
            especialidades: request.body.especialidades,
        }
    };
    let data = await db.collection('Doctors').updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
    response.json(data)

})
//#5 - Delete One
doctorsRoutes.route('/doctors/:id').delete(async (request, response) => {
    let db = database.getDb();
    let data = await db.collection('Doctors').deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data)

})

module.exports = doctorsRoutes;