var weathers = ["sunny", "rainy", "cloudy"];
var words = "";

for (var weather of weathers) {
    if (weather == "cloudy") {
        words += weather;
        break;
    }
    // this gets rid of the extra line, stops after "cloudy"
    words += weather + "\n";
    // += adds onto it 
    // \n is line break
}

console.log(words);