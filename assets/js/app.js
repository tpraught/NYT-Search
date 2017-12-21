


$("#searchButton").on("Click", function() {



	var apiKey = "d1749ff7c23545bb89fbde848f23a6c6";

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	var limit = $("#limit").val();
	//var limit = 5;
	var search = $("#searchTerm").val();
	//var search = "bootcamp";
	var startYear = $("#startYear").val() + "0101";
	//var startYear = "2017" + "0101"
	console.log(startYear);
	var endYear = $("#endYear").val() + "1231";
	//var endYear = "2017" + "1231";

	var queryURL = url + "?api-key=" + apiKey + "&q=" + search + "&begin_data=" + startYear + "&end_date=" + endYear;

	console.log(queryURL);
	$.ajax({
	  url: queryURL,
	  method: 'GET'
	}).done(function(result) {
	  console.log(result);

	  for(i=0; i<limit; i++){
	  	console.log(result.response.docs[i].snippet);
	  	var article = $("<div>").html("<h2>" + i + " " + result.response.docs[i].snippet + "</h2>");	
	  	$("#articles").append(article);
	  }



	}).fail(function(err) {
	  throw err;
	});


})

