
/*
 * GET home page.
 */
var spider = require('../lib/spider.js');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render("index.ejs")

    });

    app.post('/config', function (req, res) {
    var sourceUrl = req.body.sourceUrl;
        console.log(sourceUrl);
    var urlToItem = sourceUrl.split("/");
        console.log(urlToItem);
        spider.GetYMComments(urlToItem[0], urlToItem[2], function (result){
            console.log(result);
        });

    });

};
