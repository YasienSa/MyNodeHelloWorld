function route(handle,pathname){
  console.log('About to rout request for '+pathname);
  if(typeof handle[pathname]=='function'){
    handle[pathname]();
  }else{
    console.log('No Request Handler for '+pathname);
  }
}

exports.route=route;
