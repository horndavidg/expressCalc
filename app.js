var express = require("express");
// brings in the express module
var app = express();
// call the express function, return the object
app.set("view engine", "ejs");
// lets the server know how to render the response

app.get("/person/:name", function(request, response) {
	
	var name = request.params.name;
	response.render("person", {userName:name});
});

// Allows you to adjust the text in the index.html page
app.get("/", function(request, response) {
 	// response.send("HELLO");
	// 	var name = "David";

	response.render("index"); // {personName:name}
	});


app.get("/:operator/:num1/:num2", function(request, response) {
		var operator = request.params.operator;
		var sum;	

			
			if (operator == "add") {
					 sum = parseInt(request.params.num1, 10) + parseInt(request.params.num2, 10);
			} else if (operator == "sub") {
				     sum = parseInt(request.params.num1, 10) - parseInt(request.params.num2, 10);
			} else if (operator == "mult") {
				     sum = parseInt(request.params.num1, 10) * parseInt(request.params.num2, 10);
			} else if (operator == "div") {
				     sum = parseInt(request.params.num1, 10) / parseInt(request.params.num2, 10);
			}


			// var sum = parseInt(request.params.num1, 10) + parseInt(request.params.num2, 10);
	
		response.render("math", {number:sum});
});

// simple sum answer
// app.get("/add/:num1/:num2", function(request, response) {
// 		var sum = parseInt(request.params.num1, 10) + parseInt(request.params.num2, 10);
// 		// var sum = parseInt(string, 10);
// 		response.render("math", {number:sum});
// });

app.listen(3000, function(){
	console.log("server starting on port 3000");
	});
// sets up the app to listen to the selected port on the 
// local host.