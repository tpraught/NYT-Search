$("#searchButton").on("Click" function() {



	var apiKey = "d1749ff7c23545bb89fbde848f23a6c6";

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	var queryURL = 

	$.ajax({
	  url: queryURL,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);



	}).fail(function(err) {
	  throw err;
	});


})