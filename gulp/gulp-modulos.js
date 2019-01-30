var es = require('event-stream');

module.exports = function(file,cb){
var teste = function(){
    console.log('asdf');
}
    es.map(teste);
}