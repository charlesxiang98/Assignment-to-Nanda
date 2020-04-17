$(document).ready(function(){
	console.log("loaded jquery");
	  $("#button1").click(function(){
		  console.log("Inside button click...");
		  var zipCode=document.getElementById("zipcode").value;
		  var url1="https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=94affe3675c779dc28722293c15e379e";  
		  console.log(zipCode);
		  console.log(url1);
		  $.ajax({ 
		url: url1,success:function(result){
			console.log(result);
			var temp_min = result.main.temp_min;
	       	console.log(temp_min);
	       	var temp_max=result.main.temp_max;
	       	console.log(temp_max);
	       	var city_name=result.name;
	       	console.log(city_name); 
	       	var text="";
	       	text+="city name: "+city_name+"<br><br>temp_min:" +temp_min+"<br><br>temp_max:"+temp_max;
	        document.getElementById("content").innerHTML=text;
		
	}})
	  })
})



