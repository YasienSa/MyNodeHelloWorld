//var exec = require('child_process').exec;
var querystring=require('querystring');

function start(response,postData){
  console.log("Request Handler 'start' was called");

  //function sleep(milliSeconds){
    //var startTime=new Date().getTime();
    //while(new Date().getTime()<startTime+milliSeconds);
  //}

  //sleep(10000);

  //var content="empty";

  //exec("dir",function(error,stdout,stderr){
    //response.writeHead(200,{"Content-Type":"text/plain"});
    //content=stdout;
    //response.write(stdout);
    //response.end();
  //});


  //return content;

  var body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html; '+
  'charset=UTF-8" />'+
  '</head>'+
  '<body>'+
   '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write(body);
   response.end();
}
function upload(response,postData){
  console.log("Request Handler 'Upload' was called");
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("You've Sent "+ querystring.parse(postData).text);
  response.end();
  //return 'Hello Upload';
}

exports.start=start;
exports.upload=upload;
