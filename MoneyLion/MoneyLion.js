$(document).ready(function(){
	$('.main-button').on('click', function () {
		$('.text-black').toggleClass('open');
	});
	$('.abc,.log-in,.join-btn').addClass('black-nav');
	$('.img2').hide();


$(document).scroll(function () {
	    var nav = $(".navbar");
	    nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
});
$(document).scroll(function(){
	var nav = $(".navbar");
		if($(this).scrollTop() > nav.height()){
			$('.abc,.log-in,.join-btn').addClass('white-nav');
			$('.abc,.log-in,.join-btn').removeClass('black-nav');
			$('.img1').hide();
			$('.img2').show();
			$('.text-black span').css('background-color','black');
			
		}
		else{
			$('.abc,.log-in,.join-btn').addClass('black-nav');
			$('.abc,.log-in,.join-btn').removeClass('white-nav');
			$('.img1').show();
			$('.img2').hide();
			$('.text-black span').css('background-color','white');
		}	
	});
});