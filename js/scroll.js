$(document).ready(function(){
    var controller= new ScrollMagic.Controller();
    var ourScene= new ScrollMagic.Scene({
        triggerElement:'.hyrja-scroll',
        /* reverse: false to prevent faded in contents disappear when page scrolled up*/
    })

    .setClassToggle('.hyrja-scroll', 'show')
    .addTo(controller);
})

