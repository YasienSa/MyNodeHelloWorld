var http=require('http');
var url=require('url');

function start(route,handle){
      function OnRequest(request,response){
        var pathname=url.parse(request.url).pathname;
        console.log('Request for '+pathname+' Received');

        route(handle,pathname);

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
      }

      var server =http.createServer(OnRequest);

      server.listen(8888);

      console.log('Server has Started');
}

exports.start=start;