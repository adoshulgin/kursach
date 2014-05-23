/**
 * Created by ravenor on 23.05.14.
 */

var http=require('http');
var cheerio=require('cheerio');
var Entities = require('html-entities').XmlEntities;


function Spider(){

}

Spider.prototype.GetYMComments = function(pathOfItem, callback){

    var options = {
        host: 'market.yandex.ru',
        port: 80,
        path: pathOfItem
    };

    http.get(options, function(res) {
        console.log("Got response: " + res.statusCode);

        res.on("data", function(chunk) {

            var entities = new Entities();

            var $=cheerio.load(""+chunk);

            var r=$('[id^=review-]');

            var ret=[];

            r.each(function(){
                var rev=$(this);
                if(rev==undefined) return;

                var username=$('.b-aura-username',rev.html()).html();

                ret.add(
                    {
                        user: entities.decode($('.b-aura-username', rev.html()).html()),
                        rating: entities.decode($('.b-aura-rating__text', rev.html()).html()),
                        htmlComment: entities.decode($('.b-aura-review__rate', rev.html()).html())
                    }
                );
            });

            callback(ret);

        });

    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });

};

module.exports = new Spider();
