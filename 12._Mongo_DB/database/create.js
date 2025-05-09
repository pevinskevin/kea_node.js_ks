import db from './connection.js'

const newDiscipline = await db.disciplines.insertOne({name: "BJJ"});