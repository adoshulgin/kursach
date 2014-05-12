var http = require('http');





var server = new http.Server();
var word1="red";
var word2="bull";
var i=5;
i=i++;
function func(){
  alert("message");
};
server.listen(2904, '127.0.0.1');
server.on("request",function(req, res){
        res.end(word1 );
        func();
    }
);
