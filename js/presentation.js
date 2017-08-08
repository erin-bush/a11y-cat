
var windowHeight = $(window).height(), windowWidth = $(window).width();

$(".slide").css("height", windowHeight);
$(".slide").css("width", windowWidth);

$(window).resize(function () {
    "use strict";
    var windowHeight = $(window).height(), windowWidth = $(window).width(), centerHeight = windowHeight / 2, centerWidth = windowWidth / 2;

    $(".slide").css("height", windowHeight);
    $(".slide").css("width", windowWidth);

});

var current = 0;
console.log(current);

var sections = $(".slide")
function leftArrowPressed() {
    "use strict";
    current -= 1;
    current = Math.min(sections.length-1, Math.max(current, 0));
    $("html, body").animate({ scrollLeft: sections.eq(current).offset().left});
}

function rightArrowPressed() {
    "use strict";
    current += 1;
    current = Math.min(sections.length-1, Math.max(current, 0));
    $("html, body").animate({ scrollLeft: sections.eq(current).offset().left});
    location.hash = "#slide-" + current;
}

document.onkeydown = function (evt) {
    "use strict";
    evt = evt || window.event;
    switch (evt.keyCode) {
    case 37:
        leftArrowPressed();
        console.log(current);
        break;
    case 39:
        rightArrowPressed();
        console.log(current);
        break;
    }
};




// Search to jump - on slash key
Mousetrap.bind('/', function() {
  $('#jumper').toggleClass('is-active');
  $('.slide').toggleClass('debug');
  $('#jumper-friend').focus().select();
});
  // Submit form to jump
  $( "#jumper" ).submit(function( e ) {
    current = $( "#jumper-friend" ).val();
    current = Math.min(sections.length-1, Math.max(current, 0));
    location.hash = "#slide-" + current;
    $("html, body").animate({ scrollLeft: sections.eq(current).offset().left});
    console.log(current);
    $('#jumper').removeClass('is-active');
    $('.slide').removeClass('debug');
    e.preventDefault();
  });

// Esc key to cancel things
Mousetrap.bindGlobal('esc', function () {
  $('#jumper').removeClass('is-active');
  $('.slide').removeClass('debug');
});
