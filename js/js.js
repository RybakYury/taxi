
$(document).ready(function(){
	$('.clients-block-row').slick({
		arrows:false,
		dots:true,
		slidesToShow:2,
		autoplay:true,
		responsive: [
			{
			  breakpoint: 669, // - от какой ширины изменять настройки(1024 и ниже)
			  settings: {
				// вносим изменения на ширине 1024 и ниже 
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},

		  ]
	});
});


/* BURGER */
$(document).ready(function(){
	$('.bg__burger').click(function(event){
		$('.bg__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
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
 

  

/*
 jQuery(document).ready(function($){
	$('.content_toggle').click(function(event){
	   event.preventDefault();   // блокировать переход по ссылке
  
	   const $link= $(event.target); // a - конкретная ссылка которая была нажата
	   const $content = $link.prev('div.content_block');  // div -контент блок перед ссылкой
	 
	   $content.toggleClass('hide'); // показать или скрыть контент блок
  
	   const htmlLink  = $content.hasClass('hide') ? 'Подробнее' :  'Скрыть'; 
	   $link.html(htmlLink);	
	});				
  });
  */


