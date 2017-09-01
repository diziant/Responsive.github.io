﻿$(document).ready(function () {
		

		body = $("body");
		$(".menu__button").click(function (){
			
			body.addClass("fullscreen-menu");
			
		});
		
		$(".menu-close").click(function (){
			
			body.removeClass("fullscreen-menu");
			
		});
		
		$(".mobile-menu__link").click(function (){
			
			body.removeClass("fullscreen-menu");
			
		});
		
		// Default
		jQuery.scrollSpeed(100, 800);
		
		// Custom Easing
		jQuery.scrollSpeed(100, 800, 'easeOutCubic');
})