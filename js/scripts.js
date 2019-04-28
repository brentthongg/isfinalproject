$(document).ready(function() {
  /* For materialize */
  $(".dropdown-trigger").dropdown();

  /* For scrolling jQuery (code from: https://stackoverflow.com/questions/52832608/how-to-scroll-to-an-element-using-jquery) */

  $("#download-button").click(function() {
    $("body,html").animate(
      {
        scrollTop: $("#wallets").offset().top
      },
      1000 //speed
    );
  });
 
  // MDB Lightbox Init
  $(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });

  $(document).ready(function(){
    $('.carousel').carousel(
      {
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        duration: 100,
      }
    );
  });

  autoplay();

  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
  }

});
