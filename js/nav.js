$(document).ready(function () {

    var scrollLink = $('.nav-button')
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            
            var sectionOffset = $(this.hash).offset().top

            if(sectionOffset <= scrollbarLocation) {
                $(this).parent().siblings().removeClass('active');
                $(this).parent().addClass('active');
            }
        })
    })
})

$(document).ready(function () {
    $('li').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
})