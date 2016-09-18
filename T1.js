function say(word){
  console.log(word);
}

function execute(someFunction,par){
  someFunction(par);
}


execute(say,"Hello world");

execute(function(word){
  console.log(word);
},"Hello world again");
