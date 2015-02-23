var http = require('http');
function printMessage(username, badgecount, points){
   var message = username + " has " + badgecount + " total badge(s) and " +  points + " points in JavaScript.";
   console.log(message);
}

function catchError(error){
	console.error('Error!: ' + error.message);
}


// Wrapping get function in another function 
function getProfile(username){
var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
console.log(response.statusCode);
var body = "";
response.on('data', function(chunk){
	body+= chunk;
});
response.on('end', function(){
	if( response.statusCode === 200){
	try{
	var profile = JSON.parse(body);
	var badgecount = profile.badges.length
	var points = profile.points.total
	printMessage(username, badgecount,points );
	}catch(error){
		catchError(error);
	}
	 }else{
		catchError({message: "There was a problem retrieving profile for " + username + " (" +  http.STATUS_CODES[response.statusCode] + ")" });
	}
});

}); // End of Request
 request.on('error', catchError)
} // End of warpper function

module.exports.get = getProfile;


