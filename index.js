var express=require("express");
var app = express();

app.use(express.static(__dirname + '/public'));
//send our index.html file to the user for the home page 
app.get('/',function(red, res){
	res.sendFile(__dirname + '/welcome.html');
});
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});