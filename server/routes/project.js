var express = require('express');
var app = express();

var serverLog = function (req) {
    console.log('\n*************************************');
    var d = new Date().toISOString();
    console.log(d);
    infos = JSON.stringify(req.headers, null, ' ');
    console.log(infos);
}

app.get('/:id', function (req, res, next) {
    var project = {
        id: req.params.id
    };
    req.getConnection(function (error, conn) {
        conn.query('SELECT * FROM pm_projects WHERE id=' + project.id, function (err, rows, fields) {
            //if(err) throw err
            if (err) {
                req.flash('error', err)
                res.json(err)
            } else {
                // render to views/user/list.ejs template file
                res.status(200).send(rows)
            }
        })
    });
    serverLog(req);
})

module.exports = app