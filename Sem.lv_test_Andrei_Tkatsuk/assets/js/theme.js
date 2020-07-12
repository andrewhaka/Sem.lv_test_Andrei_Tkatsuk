<script>
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
</script>

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(56.949392, 24.103755),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
    

    
   <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBoTFNzn3Ncy-hxqNgovc9zRcTyb5uQyBE">

    
     function myMap() {
  }
    
    </script>