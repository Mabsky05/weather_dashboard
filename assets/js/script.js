//Variables
var date_list = []
var card_content = []
var UV_list = []
var cities = []
var weather_icon = []
var city_name;

//Create city button
function new_city_button(cityName) {
    var button = document.createElement("button");
    button.type = button
    button.className = "btn-styled"
    button.innerHTML = cityName 
    button.value = cityName  
    document.querySelector(".selected_cities").append(button);
    button.addEventListener("click", (event) => get_weather_data(event))
}

//Fetch Weather Data 
function get_weather_data(event) {
    event.preventDefault();
    
    if (!event.target.value) {
        city_name = document.getElementById("city_input").value;
    } else {
        city_name = event.target.value;
    }
    
    cities.push(city_name)
    city_name_latest = localStorage.getItem("stored_city")
   
    new_string = ("https://api.openweathermap.org/data/2.5/forecast?q=" + city_name_latest + "&units=metric" + "&appid=b8189352df9b1ef48c68b566e80c335a") && 
    ("https://api.openweathermap.org/data/2.5/forecast?q=" + city_name + "&units=metric" + "&appid=b8189352df9b1ef48c68b566e80c335a")

//fetch from API
fetch(new_string
, {
    }).then(function (response) {
        return response.json();
    }).then(function (data) {

        //date
        current = (moment().format('Do MMM YYYY'))
        for (i = 0; i < 6; i++) {
        date_list[i] = moment().add(i, 'd').format('Do MMM YYYY')
        }

        //latitude 
        lat = data.city.coord.lat
       
        //longitude 
        lon = data.city.coord.lon   

        UV_fetch_string = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=&appid=b8189352df9b1ef48c68b566e80c335a"
        fetch_lat_lon().then(function (ll_data){
        
        //Add UV
        for (i = 0; i < 6; i++) {
            UV_list[i] = []
            UV_list[i].push(ll_data.daily[i].uvi)
        }
        $(".uv-0").text("UV " + UV_list[0]);
        $(".uv-1").text(UV_list[1]);
        $(".uv-2").text(UV_list[2]);
        $(".uv-3").text(UV_list[3]);
        $(".uv-4").text(UV_list[4]);
        $(".uv-5").text(UV_list[5]);
        })

        //Add weather icon
        for (i = 0; i < 6; i++) {
        weather_icon[i] = []        
        weather_icon[i].push("http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon.toString() + ".png")
         }

        $(".card-image-0").attr("src", weather_icon[0]);
        $(".card-image-1").attr("src", weather_icon[1]);
        $(".card-image-2").attr("src", weather_icon[2]);
        $(".card-image-3").attr("src", weather_icon[3]);
        $(".card-image-4").attr("src", weather_icon[4]);
        $(".card-image-5").attr("src", weather_icon[5]);

        //Add everything else    
        for (i = 0; i < 6; i++) {
            card_content[i] = []
            //var card_content = [city_name, date, temp_min, temp, temp_max, humidity, wind, UV]
            card_content[i].push(data.city.name, date_list[i], data.list[i].main.temp_min.toString(), data.list[i].main.temp.toString(), 
            data.list[i].main.temp_max.toString(), data.list[i].main.humidity.toString(),data.list[i].wind.speed.toString() ) 
            }

            $(".date-0").text(" " + card_content[0][1])
            $(".temp_low-0").text("Lo  " + card_content[0][2] + " °C")
            $(".temp-0").text("Av  " + card_content[0][3] + " °C")
            $(".temp_hi-0").text("Hi  " + card_content[0][4] + " °C")
            $(".humidity-0").text("Humidity " + + card_content[0][5] + " %")
            $(".wind-0").text("Wind    " + card_content[0][6] + " m/ph")

            $(".date-1").text(card_content[1][1])
            $(".temp_low-1").text(" " + card_content[1][2] + " °C")
            $(".temp-1").text(" " + card_content[1][3] + " °C")
            $(".temp_hi-1").text(" " + card_content[1][4] + " °C")
            $(".humidity-1").text(" " + card_content[1][5] + " %")
            $(".wind-1").text(" " + card_content[1][6] + " m/ph")

            $(".date-2").text(card_content[2][1])
            $(".temp_low-2").text(" " + card_content[2][2] + " °C")
            $(".temp-2").text(" " + card_content[2][3] + " °C")
            $(".temp_hi-2").text(" " + card_content[2][4] + " °C")
            $(".humidity-2").text(" " + card_content[2][5] + " %")
            $(".wind-2").text(" " + card_content[2][6] + " m/ph")

            $(".date-3").text(card_content[3][1])
            $(".temp_low-3").text(" " + card_content[3][2] + " °C")
            $(".temp-3").text(" " + card_content[3][3] + " °C")
            $(".temp_hi-3").text(" " + card_content[3][4] + " °C")
            $(".humidity-3").text(" " + card_content[3][5] + " %")
            $(".wind-3").text(" " + card_content[3][6] + " m/ph")

            $(".date-4").text(card_content[4][1])
            $(".temp_low-4").text(" " + card_content[4][2] + " °C")
            $(".temp-4").text(" " + card_content[4][3] + " °C")
            $(".temp_hi-4").text(" " + card_content[4][4] + " °C")
            $(".humidity-4").text(" " + card_content[4][5] + " %")
            $(".wind-4").text(" " + card_content[4][6] + " m/ph")
            
            $(".date-5").text(card_content[5][1])
            $(".temp_low-5").text(" " + card_content[5][2] + " °C")
            $(".temp-5").text(" " + card_content[5][3] + " °C")
            $(".temp_hi-5").text(" " + card_content[5][4] + " °C")
            $(".humidity-5").text(" " + card_content[5][5] + " %")
            $(".wind-5").text(" " + card_content[5][6] + " m/ph")
           
            new_city_button(city_name);

    })
    .catch(err => {
	console.error(err);
    });

}

//UV fetch string assist function
function fetch_lat_lon() {
    return fetch(UV_fetch_string).then(function (response) {
        return response.json();
    })

}

//trigger
document.querySelector("#city_form").addEventListener('click', get_weather_data);
document.querySelector("#city_form").addEventListener('submit', get_weather_data);