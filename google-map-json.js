let gmap = {
  "markers": [   //array
    {   //array[0]
      "name": "Rixos The Palm Dubai",
      "location": [25.1212, 55.1535]  //array[0-1]
    },
    {   //array[1]
      "name": "Shangri-La Hotel",
      "location": [25.2084, 55.2719]  //array[0-1]
    },
    {   //array[2]
      "name": "Grand Hyatt",
      "location": [25.2285, 55.3273]  //array[0-1]
    }
  ]
}
for (let key in gmap) {
console.log(key);
console.log(gmap[key]);
}

// let markers = gmap.markers
// console.log(typeof markers);

// for (let marker of gmap.markers) {
//   console.log(marker.name,marker.location[0],marker.location[1]);
//   console.log('-------');
// }

// console.log(gmap.markers[1].name);
// console.log(gmap.markers[2].location[1]);
// console.log(gmap.markers[0].position[0]);


// for (let prop of gmap.markers) {
//   console.log(prop);
// }

// for (let prop of gmap.markers[1].location) {
//   console.log(prop);
// }