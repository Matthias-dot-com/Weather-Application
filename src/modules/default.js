export function getLocation() {
    const loc = navigator.geolocation;
  if ( loc ) {
    loc.getCurrentPosition(function (position) {
    let  myLatitude = position.coords.latitude;
     let  myLongitude = position.coords.longitude;
      console.log(myLatitude, myLongitude);
    });
  } else {
    alert("Geolocation is not supported by your web browser");
  }
}

getLocation();