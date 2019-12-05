var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());


var MatiereController = require('./matiere/MatiereController');
app.use('/matieres', MatiereController);

var EtudiantController = require('./etudiant/EtudiantController');
app.use('/etudiants', EtudiantController);

var NoteController = require('./note/NoteController');
app.use('/notes', NoteController);

module.exports = app;