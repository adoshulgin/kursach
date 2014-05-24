/**
 * Created by ravenor on 23.05.14.
 */

var http=require('http');
var cheerio=require('cheerio');
var Entities = require('html-entities').XmlEntities;

    function Spider(){

}

Spider.prototype.GetYMComments = function(host, itemId, callback){



    var options = {
        host: host,
        port: 80,
        path: "/product/" + itemId + "/reviews"
    };
    console.log(options);
    http.get(options, function(res) {

        res.on("data", function(chunk) {
            console.log(chunk);
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
                        //data: entities.decode($('.b-aura-usergeo__date', rev.html()).html()).split("<")[0],
                        //htmlComment: entities.decode($('.b-aura-userverdict__text', rev.html()).html())
                    }
                );
            });
            callback(ret);

        });

    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });

};


//new Spider().GetKPComments('/film/326/',function(comments){
//    console.log(comments);
//});

/*new Spider().GetYMComments('/product/6988659/reviews',function(comments){
    console.log(comments);
});*/

module.exports = new Spider();
