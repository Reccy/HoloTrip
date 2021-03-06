﻿
/*=============================================================
    Authour URL: www.designbootstrap.com

    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */

$(document).ready(function () {
    // SCROLL SCRIPTS 
        $('.scroll-me a').bind('click', function (event) { //just pass scroll-me class and start scrolling
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuad');
        event.preventDefault();
        });
    // BACKGROUND VIDEO SCRIPTS
        $(function () {
            $(".player").mb_YTPlayer(); // .player - class to add for playing video ( see the div above to understand)
        });
	// FIX ANIMATION BLACK LINE
		$(function () {
			$("#animation" ).on("load", function() {
				$("#animation").css("left", "-1");
				$("#animation").css("top", "-1");
			})
		});
		
		
});

//SWAP DIVS ON RESIZE
$(window).resize(function () {
	if($(window).width() < 991){
		$('.bottomdiv:parent').each(function () {
			$(this).insertBefore($(this).prev('.topdiv'));
		});
	} else {
		$('.topdiv:parent').each(function () {
			$(this).insertBefore($(this).prev('.bottomdiv'));
		});
	}
});
