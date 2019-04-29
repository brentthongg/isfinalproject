$(document).ready(function() {
  $(".dropdown-trigger").dropdown();
});

function validate(){
    var zip = $("#zip").val();
    if(zip != 15213){
        alert("Please enter a valid zip code.");
        return false;
    }
    var ifrm = parent.document.getElementById("map");
    ifrm.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97183.49648518549!2d-80.05054098749426!3d40.43134731658706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f16f48068503%3A0x8df915a15aa21b34!2sPittsburgh%2C+PA!5e0!3m2!1sen!2sus!4v1556500497321!5m2!1sen!2sus";
    parent.document.getElementById('spots').style.display = 'block';
}