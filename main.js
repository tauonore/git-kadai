$(function(){
    $('.menu').on('click', function(){
        $('#sp_nav').toggleClass('active');
        $('.menu').toggleClass('open_active');
    })
    $('#sp_nav a').on('click', function(){
        $('#sp_nav').removeClass('.active');
    })
})