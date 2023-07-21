import { exit } from "process";

if (process.argv.length > 3) {
    console.log("excess argument(s) supplied | HINT: only pass one argument");
    exit();
} else if (process.argv.length < 3) {
    console.log("insufficient arguments supplied | HINT: you must pass one argument")
    exit();
} else {
    ;
}

let target = process.argv[2];
let api = "http://ip-api.com/json/" + target + "?fields=9634809";
let data  = '';

fetch(api).then(function(response) {
    return response.json();
 }).then(function(jsonData) {
    data=jsonData
    let dataStringify = JSON.stringify(data);
    let obj = JSON.parse(dataStringify);

    let lon = obj.lon;
    let lat = obj.lat;
    let cont = obj.continent;
    let coun = obj.country;
    let prov = obj.regionName;
    let city = obj.city;
    let zip = obj.zip;
    let tz = obj.timezone;
    let curr = obj.currency;
    let isp = obj.isp;
    let mob = obj.mobile;
    let pro = obj.proxy;

    console.log("\ncontinent: " + cont + "\ncountry: " + coun + "\nprovince/state: " + prov + 
        "\ncity: " + city + "\nzip: " + zip + "\ntimezone: " + tz + "\ncurrency: " + curr + 
        "\nisp: " + isp + "\nmobile: " + mob + "\nproxy: " + pro);

    let gmap = "\nhttps://maps.google.com/?ll=" + lat + "," + lon;
    console.log(gmap + "\n");
});
