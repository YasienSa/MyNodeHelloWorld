function route(handle,pathname,response,postData){
  console.log('About to rout request for '+pathname);
  if(typeof handle[pathname]=='function'){
    //return handle[pathname]();
    handle[pathname](response,postData);
  }else{
    console.log('No Request Handler for '+pathname);
    //return "404 Not Found";
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404 Not Found");
    response.end();
  }
}

exports.route=route;
