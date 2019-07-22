$(document).ready(function(){
	$(".right").hide();
	$("#second").hide();
	/*$(".left").hover(function(){
		$(this).hide("slow", function(){
			$(".right").show();
		})
	});*/
	/*$(".right").mouseleave(function(){
		/*$(".right").show("fast",function(){
			$(".left").hide();
		});
		$(".right").hide("slow", function(){
			$(".left").show();
		})
	})*/

	$('.center').slick({
		prevArrow: '<button class="slide-arrow fas fa-angle-double-left"></button>',
	    nextArrow: '<button class="slide-arrow fas fa-angle-double-right"></button>'
   	
	});
	$('.center2').slick({
		prevArrow: false,
	    nextArrow: false,
	    dots:true,
	    speed:300,
	    infinite:true,
	     autoplay: true,
  		autoplaySpeed: 2000
   	
	});
	$('.first-button').on('click', function () {
	    $('.animated-icon').toggleClass('open');
	});
	$('.main-button').on('click', function () {
	    $('.text-black').toggleClass('open');
	});
	
});
function myFunction() {
  var x = document.getElementById("second");
  var y = document.getElementById("first-row");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}