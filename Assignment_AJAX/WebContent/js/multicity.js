$(document).ready(function() {
	console.log("Loaded jQuery!");
	$("#btn").click(function() {
		console.log("Inside button click...");
		var lon = $("#longitude").val();
		var lat = $("#latitude").val();
		console.log(lon + "====>" + lat);

		$.ajax({
			url: "https://api.openweathermap.org/data/2.5/find?lat=" + lat + "&lon=" + lon + "&cnt=10&appid=94affe3675c779dc28722293c15e379e"
			
		}).then(function(data) {
			console.log(data);
			var names = "";
			$.each(data.list, function(idx) {
				var temp = data.list[idx].name;
				console.log(temp);
				names += "<li>" + temp + "</li>";
			});
			console.log(names);
			document.getElementById("content").innerHTML=names;
			
		})
	})
	
})