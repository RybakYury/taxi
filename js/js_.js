$(document).ready(function(){
	$('.clients-block-row').slick({
		arrows:false,
		dots:true,
		slidesToShow:2,
		autoplay:true,
		
	});
});

function readMore() {
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btn.innerHTML = "Read more";
	  more.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btn.innerHTML = "Back";
	  more.style.display = "inline";
	}
  }

