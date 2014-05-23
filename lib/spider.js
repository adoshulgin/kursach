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

                ret.push(
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


Spider.prototype.GetKPComments = function(pathOfItem, callback){

    var options = {
        host: 'www.kinopoisk.ru',
        port: 80,
        path: pathOfItem
    };

    http.get(options, function(res) {
        console.log("Got response: " + res.statusCode);

        res.on("data", function(chunk) {
            console.log('llllll');
            var entities = new Entities();

            var $=cheerio.load(""+chunk);

            var r=$('[id^=div_review_]');

            var ret=[];

            r.each(function(){
                var rev=$(this);
                if(rev==undefined) return;

                ret.push(
                    {
                        user: entities.decode($('.profile-name  a', rev.html()).html()),
                        //rating: entities.decode($('.b-aura-rating__text', rev.html()).html()),
                        //htmlComment: entities.decode($('.b-aura-review__rate', rev.html()).html())
                    }
                );
            });

            callback(ret);

        });

    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });

};

new Spider().GetKPComments('/film/326/',function(comments){
    console.log(comments);
});

/*new Spider().GetYMComments('/product/6988659/reviews',function(comments){
    console.log(comments);
});*/

module.exports = new Spider();
