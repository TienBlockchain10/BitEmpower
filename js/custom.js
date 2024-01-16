// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


function copyText1() {
    // Get the text
    var text = document.getElementById('textToCopy1').innerText;
  
    // Create a temporary textarea
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
  
    // Select and copy the text
    textarea.select();
    document.execCommand('copy');
  
    // Remove the temporary textarea
    document.body.removeChild(textarea);
  
    // Optional: alert the user that text has been copied
    alert('(214) 206-7585 copied!');
  }

function copyText() {
    // Get the text
    var text = document.getElementById('textToCopy').innerText;
  
    // Create a temporary textarea
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
  
    // Select and copy the text
    textarea.select();
    document.execCommand('copy');
  
    // Remove the temporary textarea
    document.body.removeChild(textarea);
  
    // Optional: alert the user that text has been copied
    alert('0xEFd8fF4D40D08C3E3285614fe26b14d6997bC103 copied!');
  }
  
  