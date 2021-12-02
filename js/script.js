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