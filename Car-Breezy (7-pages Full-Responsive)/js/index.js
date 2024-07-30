// loader start here //////////////

		const minLoaderTime = 2000;
		const startTime = new Date().getTime();
	
		window.addEventListener('load', function() {
		  const loadTime = new Date().getTime() - startTime;
		  const remainingTime = minLoaderTime - loadTime;
		  
		  setTimeout(function() {
			document.getElementById('loader').style.display = 'none';
		  }, remainingTime > 0 ? remainingTime : 0);
		});

// Loader End here /////////////

// <!-- Thicker and visitor counter -->

// visitor count
document.addEventListener("DOMContentLoaded", function () {
        // Visitor count
        let visitorCount = localStorage.getItem('visitorCount') || 0;
        visitorCount++;
        localStorage.setItem('visitorCount', visitorCount);
        document.getElementById('visitor-count').innerText = visitorCount;
    });
    // -------------------------------------------------------------------------------------------------
// Location and thicker_------------------------------------------------------
    function updateTicker() {
        var dateElement = document.getElementById("date");
        var timeElement = document.getElementById("time");
        // Get current date and time
        var currentDate = new Date();
        var dateString = currentDate.toDateString();
        var timeString = currentDate.toLocaleTimeString();
        // Update date and time
        dateElement.innerHTML = "Date: " + dateString;
        timeElement.innerHTML = "Time: " + timeString;
    }
    function updateLocation(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var locationElement = document.getElementById("location");
        locationElement.innerHTML = "Location: " + latitude + ", " + longitude;
    }
    function fetchLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(updateLocation);
        } else {
            var locationElement = document.getElementById("location");
            locationElement.innerHTML = "Location: Not available";
        }
    }
    // Update the ticker every second
    setInterval(updateTicker, 1000);
    // Initial updates
    updateTicker();
    fetchLocation();
