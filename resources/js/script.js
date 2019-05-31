$(document).ready(function() {
  /* For the sticky navigation */

  $(".js--section--steps").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    { offset: "40px" }
  );

  //Mobile nav
  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-md-list")) {
      icon.addClass("ion-md-close");
      icon.removeClass("ion-md-list");
    } else {
      icon.addClass("ion-md-list");
      icon.removeClass("ion-md-close");
    }
  });
});

//scroll animation for each section
$(document).on("scroll", function() {
  const pageTop = $(document).scrollTop();
  const pageBottom = pageTop + $(window).height();
  const tags = $("section");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});
