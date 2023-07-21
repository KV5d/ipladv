"use strict";
exports.__esModule = true;
var process_1 = require("process");
if (process.argv.length > 3) {
    console.log("excess argument(s) supplied | HINT: only pass one argument");
    (0, process_1.exit)();
}
else if (process.argv.length < 3) {
    console.log("insufficient arguments supplied | HINT: you must pass one argument");
    (0, process_1.exit)();
}
else {
    ;
}
var target = process.argv[2];
var api = "http://ip-api.com/json/" + target + "?fields=9634809";
var data = '';
// google maps link base: https://maps.google.com/?ll=latitude,longitude
fetch(api).then(function (response) {
    return response.json();
}).then(function (jsonData) {
    data = jsonData;
    // console.log(data);
    var dataStringify = JSON.stringify(data);
    var obj = JSON.parse(dataStringify);
    var lon = obj.lon;
    var lat = obj.lat;
    var cont = obj.continent;
    var coun = obj.country;
    var prov = obj.regionName;
    var city = obj.city;
    var zip = obj.zip;
    var tz = obj.timezone;
    var curr = obj.currency;
    var isp = obj.isp;
    var mob = obj.mobile;
    var pro = obj.proxy;
    console.log("\ncontinent: " + cont + "\ncountry: " + coun + "\nprovince/state: " + prov +
        "\ncity: " + city + "\nzip: " + zip + "\ntimezone: " + tz + "\ncurrency: " + curr +
        "\nisp: " + isp + "\nmobile: " + mob + "\nproxy: " + pro);
    var gmap = "\nhttps://maps.google.com/?ll=" + lat + "," + lon;
    console.log(gmap + "\n");
});
