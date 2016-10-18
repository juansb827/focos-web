var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {

    var seq=global.databases["db_focus"].sequelize;
    var SYSMENUFOCUS=global.databases["db_focus"].models.SYSMENUFOCUS;
    var consulta="SELECT * FROM TB99PROYECTOS";

    seq.query(consulta, { type: seq.QueryTypes.SELECT})
        .then(function(results) {
            res.json(results)
        })
    
});
module.exports= router;
