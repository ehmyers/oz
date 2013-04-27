var geocoder;
var map;

/**
 * The HomeControl adds a control to the map that simply
 * returns the user to Chicago. This constructor takes
 * the control DIV as an argument.
 */

function HomeControl(controlDiv, map) {

    // Set CSS styles for the DIV containing the control
    // Setting padding to 5 px will offset the control
    // from the edge of the map
    controlDiv.style.padding = '5px';

    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = 'white';
    controlUI.style.borderStyle = 'solid';
    controlUI.style.borderWidth = '2px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to set the map to Home';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '12px';
    controlText.style.paddingLeft = '4px';
    controlText.style.paddingRight = '4px';
    controlText.innerHTML = '<b>Home</b>';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to
    // Chicago
    google.maps.event.addDomListener(controlUI, 'click', function() {
        map.setCenter(codeAddress());
    });

}

function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(35.614945, -82.566389);
    var styles = [
        { "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#f8c340" } ] },{ "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#292929" } ] },{ "elementType": "labels.text.stroke", "stylers": [ { "invert_lightness": true } ] }];
    var mapOptions = {
        zoom: 30,
        center: latlng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.HYBRID        
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.setOptions({styles:styles});
    map.setTilt(45);
    
    
    //SD - contentString sets up the inner HTML for the info window attached to the centerd marker
    //All lines created below can be written as simple html
    //Be sure that all lines end in "+" otherwise a return will break the variable and the text will not be displayed.
    
    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Good News!</h1>'+
            '<div id="bodyContent">'+
            '<p>The Wizard has determined the location for your perfect home:</p>' +
            '<p>' + address + '</p>'+
            '<p>Based on your performance in the test the wizard has determined ' +
            'that you are <strong><em>not</em></strong> a good fit for OZ. '+
            'The reason given by the Wizard is:</p> '+
            '<h3>There is no place like home.</h3>'+
            '<p>Be aware that this decision is final and binding.  <em>Emerald City Real Estate&trade;</em>'+
            'supports the decision made by the Wizard, and this cannot be contested.</p>'+
            '<p>Please return to the main conference area by returning to the emerald gate.</p> '+
            '</div>'+
            '</div>';

    var infowindow = new google.maps.InfoWindow({
            content: contentString
    });

    var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Results from the Wizard',
            animation: google.maps.Animation.DROP
    });
    
        infowindow.open(map,marker);

    
    
    // Create the DIV to hold the control and
    // call the HomeControl() constructor passing
    // in this DIV.
    var homeControlDiv = document.createElement('div');
    var homeControl = new HomeControl(homeControlDiv, map);

    homeControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
}

function codeAddress() {
    
    var address = $("#address").val();//document.getElementById('address').value;
    if (address === "undefined undefined") {
        address = "1 University Heights, Asheville, NC";
        $("#address").val(address);
    }
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            
            var marker = new google.maps.Marker({
                    map: map,
                    title: 'Results from the wizard',
                    position: results[0].geometry.location
            });
            //SD - contentString sets up the inner HTML for the info window attached to the centerd marker
    //All lines created below can be written as simple html
    //Be sure that all lines end in "+" otherwise a return will break the variable and the text will not be displayed.
    
    
    
    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Good News!</h1>'+
            '<div id="bodyContent">'+
            '<p>The Wizard has determined the location for your perfect home:</p>' +
            '<p><h1>' + address + '</h1></p>'+
            '<p>Based on your performance in the test the wizard has determined' +
            'that you are not a good fit for OZ. '+
            'The reason given by the Wizard is:</p> '+
            '<h3>There is no place like home.</h3>'+
            '<p>Be aware that this decision is final and binding.  <em>Emerald City Real Estate&trade;</em>'+
            'supports the decision made by the Wizard, and this cannot be contested.</p>'+
            '<p>Please return to the main conference area by returning to the emerald gate.</p> '+
            '</div>'+
            '</div>';

    var infowindow = new google.maps.InfoWindow({
            content: contentString, 
    });

    
        infowindow.open(map,marker);

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}