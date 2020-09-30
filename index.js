$(document).ready(function() {
    // Search / Clear

    $("button").on("click", function(){
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var searchValue = $("#search-value").val("");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q="+ searchValue +"&appid=" + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET",
            
          })
            .then(function(response) {
              console.log(queryURL);
              console.log(response);
              // Transfer content to HTML
              $(".city").html("<h1>" + response.name + " Weather Details</h1>");
              $(".wind").text("Wind Speed: " + response.wind.speed);
              $(".humidity").text("Humidity: " + response.main.humidity);
              $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
              
              // Log the data in the console as well
              console.log("Wind Speed: " + response.wind.speed);
              console.log("Humidity: " + response.main.humidity);
              console.log("Temperature (F): " + tempF);
    });

    function makeList(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $("history").append(li);
      }
    });

    // function forecast(searchValue) {
    //     $.ajax({
    //         type: "GET",
    //         url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=" + APIKey,
    //         success: function(response) {
    //         $("#forecast").html("<h3 class= 5-Day Forecast:</h3>").append("<div class=\"row\">");
    
    //         for (var i = 0; i < response.list.length; i++) {
    //           if (response.list[i].indexOf("10:00:00") !== -1) {
    //             var col = $("<div>").addClass("col-lg-2");
    //             var card = $("<div>").addClass("card bg-primary text-white");
    //             var body = $("<div>").addClass("card-body");
    
    //             var title = $("<h5>").addClass("card-title").text(new Date(response.list[i].dt_txt).toLocaleDateString());
    
    //             var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png");
    
    //             var p1 = $("<p>").addClass("card-text").text("Temp: " + response.list[i].main.tempF + " °F");
    //             var p2 = $("<p>").addClass("card-text").text("Humidity: " + response.list[i].main.humidity + "%");
    
    //             // merge together and put on page
    //             col.append(card.append(body.append(title, img, p1, p2)));
    //             $("#forecast .row").append(col);
    //           }
    //         }
    //         }
    //     });
    //   }
    //   var cityHistory = JSON.parse(window.localStorage.getItem("history")) || [];

    //   if (cityHistory.length > 0) {
    //     searchWeather(cityHistory[cityHistory.length(-1)]);
    //   }
    
    //   for (var i = 0; i < cityHistory.length; i++) {
    //     makeList(cityHistory[i]);
    //   }

});