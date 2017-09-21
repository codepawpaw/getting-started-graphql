
var xhr = new XMLHttpRequest();

$(document).ready(function () {
    $('button').click(function () {
    	let query = {query: "mutation {"+
		  "addTodo(data: {"+
		    "title:"+ '"'+$("input[name=task]").val()+'"'+
		  "})"+
		"}"};

		sendPOSTRequest(JSON.stringify(query), function(){}, xhr);

        $('#todo').append("<ul>" + $("input[name=task]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
    });
    $("body").on('click', '#todo a', function () {
    	let id = $(this).closest("ul").text().split(" ")[2];
    	let query = {query: "{removeTodo(data: { _id: "+ '"'+ id +'"' +"})}"};
        $(this).closest("ul").remove();
		sendPOSTRequest(JSON.stringify(query), function(){ }, xhr);        
    });


});

function removeTodo(id) {
	let query = {query: "{removeTodo(data: { _id: "+ id +"})}"};
	sendPOSTRequest(query, function(){}, xhr);
    $(this).closest("ul").remove();
}

function sendPOSTRequest(query, resolver, xhr) {
	var url ="https://nodejs-graphql.herokuapp.com/graphql";
	xhr.open("POST", url);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onload = resolver;
	xhr.send(query);
}

let query = JSON.stringify({ query: "{findTodo(data:{}) {_id,title,description}}" });
let resolver = function() {
	let responses = JSON.parse(xhr.response);
	responses.data.findTodo.map(response => $('#todo').append("<ul>" + response.title + " <a href='#' class='close' aria-hidden='true'>&times; <ul class='hide'>" + response._id + "</ul></a></ul>"));
}
sendPOSTRequest(query, resolver, xhr);