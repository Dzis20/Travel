$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
 });

