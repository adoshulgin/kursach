
/*
 * GET home page.
 */
module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render("index.ejs")

    });

    app.post('/config', function (req, res) {
    var source=req.body.dataSource;
    var time=req.body.time;
        console.log(source,time);
    });

};