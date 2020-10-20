$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
 });

