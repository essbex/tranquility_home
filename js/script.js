    let key = config.API_KEY
    let script = document.createElement('script');

    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + key + '&callback=initMap';
    script.async = true;

    window.initMap = function () {
      tranquilityHome = {lat: 30.181740, lng: -97.79667};
      map = new google.maps.Map(document.getElementById('map'), {
        center: tranquilityHome,
        zoom: 12
      });
      let marker = new google.maps.Marker({
        position: tranquilityHome,
        map: map,
        title: "Tranquility Home"
      });
    };

    document.head.appendChild(script);

    initMap();








    //   function Map(id, options) {
    //     var element = document.getElementById(id);
    //     google.maps.Map.call(this, element, options);

    //     this.id = id;
    //     this.latlng = options.center;

    //     this.customAddMarkerAtCenter = function() {
    //       return new google.maps.Marker({
    //         position: this.latlng,
    //         map: map,
    //         title: 'Tranquility House'
    //       });
    //     }
    //   }

    //   Map.prototype = Object.create(google.maps.Map.prototype);
    //   Map.prototype.constructor = Map;

    //   function initMap()
    //   {
    //     map = new Map("googleMap", {
    //       center: new google.maps.LatLng(30.181740, -97.796672),
    //       zoom: 12
    //     }, "mapId");

    //     map.customAddMarkerAtCenter();

    //     var marker = new google.maps.Marker({
    //       position: new google.maps.LatLng(30.181740, -97.79667),
    //       map: map,
    //       title: "Tranquility House"
    //     });
    //   }

    //   initMap();
    // </script>