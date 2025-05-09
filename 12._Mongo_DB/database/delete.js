import db from './connection.js';

const deleteDiscipline = new db.disciplines.deleteOne({ name: 'Karate' });
