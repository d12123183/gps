

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
    console.log("navigator.geolocation works well");
    document.getElementById("getPosition").addEventListener("click", getPosition);


}


function getPosition() {

    var options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
    };

    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    function onSuccess(position) {

        alert('Latitude: '          + position.coords.latitude        + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' );
    }

    function onError(error) {
        alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }
}

function watchPosition() {

    var options = {
        maximumAge: 3600000,
        timeout: 3000,
        enableHighAccuracy: true
    };

    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

    function onSuccess(position) {

        alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n'  );
    }

    function onError(error) {
        alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
    }

}



app.initialize();