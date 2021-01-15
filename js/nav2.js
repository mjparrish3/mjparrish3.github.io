//Display active on scroll
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

//Display active on click
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

/*************
    Check if mobile or desktop
    *********/
   function checkAboutUs() {
    console.log("in about us")
    var desktopVersion = document.getElementById("about-us");
	if(desktopVersion.attributes.display = "none"){
		return true
	}
}