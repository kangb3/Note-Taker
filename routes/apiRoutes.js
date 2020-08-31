const fs = require('fs');
const noteData = require('..db/db.json');

module.exports = function (app) {

    console.log("it works");
    app.get('/api/notes', function(req,res){
        fs.readFile('./db/db.json', 'utf-8', function(err, res){
            if (err) throw err;

            const noteData = JSON.parse(res);
        res.json(noteData);
        });
    });

    // app.post('/api/notes', function(req, res){

    // }
}