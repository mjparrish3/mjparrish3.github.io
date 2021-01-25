/**************************
 * Display active on scroll
 * ************************/
function onPageLoad() {
	var scrollLinks = Array.from(document.getElementsByClassName("nav-button"));
	// console.log(scrollLinks)
	window.onscroll = function() {
		scrollLinks.forEach(ele => {
			var id = ele.getAttribute("href");
			var sectionOffset = document.getElementById(id.substring(1)).getBoundingClientRect().y;
			if (id.includes("mobile")){
				return
			}
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
function navOnClick() {
	var btns = document.getElementsByClassName('btn-wrapper');
	Array.from(btns).forEach(btn => {
		btn.addEventListener('click', () => {
			var selected = Array.from(document.getElementsByClassName("active"));
			selected[0].className = selected[0].className.replace(" active", "");
			console.log(selected[0].className)
			btn.className += " active";
		})
	})
	
}

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