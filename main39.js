"use strict";
/* 39.  City Names: Write a function called city_country() that takes
in the name of a city and its country. The function should return a
string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print
 the value that’s returned*/
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city = 'Lahore:', country = 'Pakistan') {
    return console.log(`City: ${city}, Country: ${country}`);
}
// call the function with default city and country
city_country();
// call function with 3 different cities and its countries
city_country('Cambridge:', 'England');
city_country('New York:', 'USA');
city_country('Toranto:', 'Canada');
