var db = require('../db');

var Etudiant = {
    getEtudiantsNoted: function(callback)
    {
        return db.query('SELECT t_note.valeur as note, t_matiere.libelle as lib, t_matiere.coefficient as coef, t_etudiant.nom as nom, t_etudiant.prenom as prenom, t_etudiant.matricule as matricule, t_etudiant.id_etudiant as id_etudiant  FROM t_note, t_matiere, t_etudiant WHERE t_note.id_etudiant = t_etudiant.id_etudiant AND t_note.id_matiere = t_matiere.id_matire', callback);
    },
    getEtudiants: function(callback)
    {
        return db.query('select * from t_etudiant', callback);
    },
    createEtudiant: function (Etudiant, callback) {
        return db.query('Insert into t_etudiant(matricule, nom, prenom) values(?, ?, ?)',[Etudiant.matricule, Etudiant.nom, Etudiant.prenom], callback);
    }
}

module.exports = Etudiant;