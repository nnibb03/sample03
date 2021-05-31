$(document).ready(function(){
    $("#nav-button").on("click", function(){
        $(".sp-nav").slideToggle();
    });
});


$(function(){
  $(".dropdown-btn").hover(function(){
    $(this).children(".dropdown").stop().slideToggle();
  });
});

