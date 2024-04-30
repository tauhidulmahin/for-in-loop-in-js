let geo = {
    "as": "AS16509 Amazon.com, Inc.",
    "city": "Boardman",
    "country": "United States",
    "countryCode": "US",
    "isp": "Amazon",
    "lat": 45.8696,
    "lon": -119.688,
    "org": "Amazon",
    "query": "54.148.84.95",
    "region": "OR",
    "regionName": "Oregon",
    "status": "success",
    "timezone": "America/Los_Angeles",
    "zip": "97818"
}

// console.log(geo.timezone);
// console.log(geo.query);
// console.log(geo.isp);
// console.log(geo.city);


for (let prop in geo) {
    console.log(geo[prop]);
  }