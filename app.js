var profile = require('./profile.js');
var users = ["wilfredobiora", "joykesten2","davemcfarland"];
// users.forEach(function(user){
// 	profile.get(user)
// });
//profile.get("joykesten2");
//console.dir(process.argv);
var users = process.argv.slice(2);

users.forEach(function(v){
  profile.get(v)
});