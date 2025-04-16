var inputSearch = document.getElementById("inputSearch")
var iconCondition = document.getElementById("iconCondition")
var textConvarition = document.getElementById("textCondition")
var textCity = document.getElementById("textCity")
var todayDegree = document.getElementById("todayDegree")
var tomorrowDegreeDay = document.getElementById("tomorrowDegreeDay")
var tomorrowDegreeNight = document.getElementById("tomorrowDegreeNight")
var iconConditionTomorrow = document.getElementById("iconConditionTomorrow")
var textConditionTomorrow = document.getElementById("textConditionTomorrow")
var nextTomorrowDegreeDay = document.getElementById("nextTomorrowDegreeDay")
var nextTomorrowDegreeNight = document.getElementById("nextTomorrowDegreeNight")
var iconConditionNextTomorrow = document.getElementById("iconConditionNextTomorrow")
var textConditionNextTomorrow = document.getElementById("textConditionNextTomorrow")

async function search(location) {
    var data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${location}&days=3`);
    var result = await data.json();

    if (result.forecast != undefined && result.forecast != null) {
        console.log(result);
        textCity.innerHTML = result.location.name
        todayDegree.innerHTML = result.current.temp_c + "<sup>o</sup>C"
        iconCondition.setAttribute("src", "https:" + result.current.condition.icon)
        textCondition.innerHTML = result.current.condition.text

        tomorrowDegreeDay.innerHTML = result.forecast.forecastday[1].day.
            maxtemp_c + "<sup>o</sup>C"

        tomorrowDegreeNight.innerHTML = result.forecast.forecastday[1].day.
            mintemp_c + "<sup>o</sup>"

        iconConditionTomorrow.setAttribute("src", "https:" + result.forecast.forecastday[1].day.condition.icon)
        textConditionTomorrow.innerHTML = result.forecast.forecastday[1].day.condition.text

        nextTomorrowDegreeDay.innerHTML = result.forecast.forecastday[2].day.
            maxtemp_c + "<sup>o</sup>C"

        nextTomorrowDegreeNight.innerHTML = result.forecast.forecastday[2].day.
            mintemp_c + "<sup>o</sup>"

        iconConditionNextTomorrow.setAttribute("src", "https:" + result.forecast.forecastday[2].day.condition.icon)
        textConditionNextTomorrow.innerHTML = result.forecast.forecastday[2].day.condition.text


        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var dd = new Date(result.forecast.forecastday[0].date);
        var dayName = weekday[dd.getDay()];
        document.getElementById("today").innerHTML = dayName;

        var ddd = new Date(result.forecast.forecastday[1].date);
        var tomorrowName = weekday[ddd.getDay()];
        document.getElementById("tomorrow").innerHTML = tomorrowName

        var dddd = new Date(result.forecast.forecastday[2].date);
        var nextTomorrowName = weekday[dddd.getDay()];
        document.getElementById("nextTomorrow").innerHTML = nextTomorrowName

        var d = new Date(result.forecast.forecastday[0].date);
        var day = d.getDate();

        var namesMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = new Date(result.forecast.forecastday[0].date);
        var name = namesMonth[month.getMonth()];
        document.getElementById("date").innerHTML = day + name;
    }
}

inputSearch.addEventListener("keyup", function (e) {
    search(inputSearch.value)
})
search('cairo')