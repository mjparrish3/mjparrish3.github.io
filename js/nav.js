/**************************
 * Display active on scroll
 * ************************/
// $(document).ready(function () {

//     var scrollLink = $('.nav-button')
//     $(window).scroll(function () {
//         var scrollbarLocation = $(this).scrollTop();

//         scrollLink.each(function() {
            
//             var sectionOffset = $(this.hash).offset().top

//             if(sectionOffset <= scrollbarLocation) {
//                 $(this).parent().siblings().removeClass('active');
//                 $(this).parent().addClass('active');
//             }
//         })
//     })
// })


function onPageLoad() {
	var scrollLinks = Array.from(document.getElementsByClassName("nav-button"));
	window.onscroll = function() {
		scrollLinks.forEach(ele => {
			var id = ele.getAttribute("href");
			var sectionOffset = document.getElementById(id.substring(1)).getBoundingClientRect().y;
			if(sectionOffset <= 0){
				for(var i = 0; i < scrollLinks.length; i++){
					scrollLinks[i].parentNode.classList.remove("active")
				}
				ele.parentElement.classList.add("active");
			}
		})
	}
}


/************************** 
 * Display active on click
 * ************************/
$(document).ready(function () {
    $('li').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
})

/*************
    Hamburger
    *********/
function openBurger() {
    console.log("Open")
    var dropDown = document.getElementById("burger");
    dropDown.classList.add("open"); 
}
function closeBurger() {
    console.log("Close")
    var dropDown = document.getElementById("burger");
    dropDown.classList.remove("open");
}