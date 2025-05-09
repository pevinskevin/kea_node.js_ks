import db from './connection.js';

const updateDiscipline = await db.disciplines.updateOne({name: "BJJ"}, { $set: {name: "Brazilian Jiu-Jitsu" } } );