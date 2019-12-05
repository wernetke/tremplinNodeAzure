var db = require('../db');

var Note = {
    getnotes: function(callback)
    {
        return db.query('SELECT * from t_note', callback);
    },
    createnote: function (Note, callback) {
        created = new Date();
        return db.query('Insert into t_note(valeur, date_creation, id_matiere, id_etudiant) values(?, ?, ?, ?)',[Note.valeur, created, Note.id_matiere, Note.id_etudiant], callback);
    }
}

module.exports = Note;