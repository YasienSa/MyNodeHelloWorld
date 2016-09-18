var http=require('http');
var url=require('url');
var formidable=require('formidable');

function start(route,handle){
      function OnRequest(request,response){

        //if(request.url=='/upload'&&request.method.toLowerCase()=='post'){
          //var form=new formidable.IncommingForm();
          //form.parse(request,function(errors,fields,files){
            //response.writeHead(200,{"Content-Type":"text/plain"});
            //resonse.write("Received Upload:\n\n");
            //response.end(sys.inspect({fields:fields,files:files}));
          //});
          //return;
        //}

        var pathname=url.parse(request.url).pathname;
        console.log('Request for '+pathname+' Received');

        //var Content=route(handle,pathname);

        //response.writeHead(200,{"Content-Type":"text/plain"});
        //response.write(Content);
        //response.end();
        //route(handle,pathname,response);
        var postData="";
        request.setEncoding("utf8");

        request.addListener("data",function(postDataChunk){
             postData+=postDataChunk;
             console.log("Received Post Data Chunk "+postDataChunk);
        });

        request.addListener("end",function(){
           route(handle,pathname,response,postData);
        });
      }

      var server =http.createServer(OnRequest);

      server.listen(8888);

      console.log('Server has Started');
}

exports.start=start;
