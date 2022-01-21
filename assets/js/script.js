var date_list = []
//var card_content = [city_name, date, temp_min, temp, temp_max, humidity, wind, UV]
var card_content = []
var UV_list = []
//var cities = localStorage.getItem('stored_city') || []
var cities = []


function new_city_button() {
    var button = document.createElement("button");
    button.type = button
    button.className = 'btn-styled'
    button.innerHTML = city_name 
    button.value = city_name
    document.querySelector(".selected_cities").append(button);
    button.addEventListener("click", (e) => get_weather_data(e))
}


function get_weather_data(event) {
    event.preventDefault();

    city_name = document.getElementById("city_input").value
    cities.push(city_name)
    city_name_stringy = JSON.stringify(city_name);
    city_name_parsed = JSON.parse(city_name_stringy)
    localStorage.setItem("stored_city", city_name_stringy);
    city_name_latest = localStorage.getItem("stored_city")
    console.log(cities);
  
    new_string = ("https://api.openweathermap.org/data/2.5/forecast?q=" + city_name_latest + "&units=metric" + "&appid=b8189352df9b1ef48c68b566e80c335a") && 
    ("https://api.openweathermap.org/data/2.5/forecast?q=" + city_name + "&units=metric" + "&appid=b8189352df9b1ef48c68b566e80c335a")


fetch(new_string
, {
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        //console.log(data);
        console.log(data);

        //name of the city
        console.log(data.city.name);
        city_name = data.city.name

        //date
        current = (moment().format('Do MMM YYYY'))
        //console.log(current);
        for (i = 0; i < 6; i++) {
        date_list[i] = moment().add(i, 'd').format('Do MMM YYYY')
        }
        //icon representation of weather conditions

        //temp_min
        temp_min = data.list[0].main.temp_min.toString();
        console.log(data.list[0].main.temp_min.toString());
        
        //temp
        temp = data.list[0].main.temp.toString();
        console.log(data.list[0].main.temp.toString());
        
        //temp_max
        temp_max = data.list[0].main.temp_max.toString();
        console.log(data.list[0].main.temp_max.toString());

        //humidity
        humidity = data.list[0].main.humidity.toString();
        console.log(data.list[0].main.humidity.toString());

        //windspeed
        wind_speed = data.list[0].wind.speed.toString();
        console.log(data.list[0].wind.speed.toString());

        //latitude 
        console.log(data.city.coord.lat);
        lat = data.city.coord.lat
       
        //longitude 
        console.log(data.city.coord.lon); 
        lon = data.city.coord.lon
        
        //lon = data.city.coord.lon.toString();
    
        UV_fetch_string = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=&appid=b8189352df9b1ef48c68b566e80c335a"

        fetch_lat_lon().then(function (ll_data){
        console.log(ll_data);
        var youvee = ll_data.current.uvi
        console.log(ll_data.current.uvi)

        })

        for (i = 0; i < 6; i++) {
            card_content[i] = []
            card_content[i].push(data.city.name, date_list[i], data.list[i].main.temp_min.toString(), data.list[i].main.temp.toString(), data.list[i].main.temp_max.toString(), data.list[i].main.humidity.toString(),data.list[i].wind.speed.toString() ) 
            console.log(data.city.name);
            console.log(date_list[i]);
            console.log("temp_min: " + data.list[i].main.temp_min.toString());
            console.log("temp_max: " + data.list[i].main.temp_max.toString());
            console.log(data.list[i].main.humidity.toString())
            console.log(data.list[i].wind.speed.toString())
            //var card_content = [city_name, date, temp_min, temp, temp_max, humidity, wind, UV]
            }
            console.log(card_content[1][1])
            $(".date-0").text(card_content[0][1])
            $(".temp_low-0").text("Lo  " + card_content[0][2] + " °C")
            $(".temp-0").text("Av  " + card_content[0][3] + " °C")
            $(".temp_hi-0").text("Hi  " + card_content[0][4] + " °C")
            $(".humidity-0").text("Humidity " + + card_content[0][5] + " %")
            $(".wind-0").text("Wind    " + card_content[0][6] + " MPH")

            $(".date-1").text(card_content[1][1])
            $(".temp_low-1").text(" " + card_content[1][2] + " °C")
            $(".temp-1").text(" " + card_content[1][3] + " °C")
            $(".temp_hi-1").text(" " + card_content[1][4] + " °C")
            $(".humidity-1").text(" " + card_content[1][5] + " %")
            $(".wind-1").text(" " + card_content[1][6] + " MPH")

            $(".date-2").text(card_content[2][1])
            $(".temp_low-2").text(" " + card_content[2][2] + " °C")
            $(".temp-2").text(" " + card_content[2][3] + " °C")
            $(".temp_hi-2").text(" " + card_content[2][4] + " °C")
            $(".humidity-2").text(" " + card_content[2][5] + " %")
            $(".wind-2").text(" " + card_content[2][6] + " MPH")

            $(".date-3").text(card_content[3][1])
            $(".temp_low-3").text(" " + card_content[3][2] + " °C")
            $(".temp-3").text(" " + card_content[3][3] + " °C")
            $(".temp_hi-3").text(" " + card_content[3][4] + " °C")
            $(".humidity-3").text(" " + card_content[3][5] + " %")
            $(".wind-3").text(" " + card_content[3][6] + " MPH")

            $(".date-4").text(card_content[4][1])
            $(".temp_low-4").text(" " + card_content[4][2] + " °C")
            $(".temp-4").text(" " + card_content[4][3] + " °C")
            $(".temp_hi-4").text(" " + card_content[4][4] + " °C")
            $(".humidity-4").text(" " + card_content[4][5] + " %")
            $(".wind-4").text(" " + card_content[4][6] + " MPH")
            
            $(".date-5").text(card_content[5][1])
            $(".temp_low-5").text(" " + card_content[5][2] + " °C")
            $(".temp-5").text(" " + card_content[5][3] + " °C")
            $(".temp_hi-5").text(" " + card_content[5][4] + " °C")
            $(".humidity-5").text(" " + card_content[5][5] + " %")
            $(".wind-5").text(" " + card_content[5][6] + " MPH")

           
            new_city_button();

    })
    .catch(err => {
	console.error(err);
    });

}
console.log(card_content)

function fetch_lat_lon() {
    return fetch(UV_fetch_string).then(function (response) {
        return response.json();
    })

}

document.querySelector("#city_form").addEventListener('submit', get_weather_data);

//document.querySelector("#city_form").addEventListener('submit', myFunction());

//document.querySelector("#city_form").addEventListener('onclick', $(".card").empty());
//$("#city_form")[0].reset();


 //function myFunction() {
//     $(".list-group.list-group-item li").empty();
// }




//$('#myForm')[0].reset();

//localStorage.setItem()