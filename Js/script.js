$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".Sign-up-btn").addClass("white");
      $(".fas").addClass("blackText");
    } else {
      $(".navbar").removeClass("sticky");
      $(".Sign-up-btn").removeClass("white");
      $(".fas").removeClass("blackText");
    }
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
