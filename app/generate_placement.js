var Client = require('mariasql');

var c = new Client({
    host: 'autoplacement_db_1',
    user: 'root',
    password: 'p4ssword',
    db: 'autoplacement'
});

// Todo : implémenter l'algo de randomisation et insérer les valeurs
// en SQL dans une nouvelle table "position"

c.query('INSERT INTO position SET student_id=X, position=X', function(err, rows) {
    if (err)
        throw err;
});

c.end();