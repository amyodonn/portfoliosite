// JavaScript Document

$(document).ready(function(){
	
	
	
	
	// If you declare the variable here, all the functions will be able to use it
	var imageHeightsmall = $(".hover_area_small").find("div").height(); // To remember what value to go back to
	var imageHeightlarge = $(".hover_area_large").find("div").height(); // To remember what value to go back to
	var croppedSizesmall = 0.9; // The ratio of the image left after it is cropped
	var croppedSizelarge = 0.96; // The ratio of the image left after it is cropped
	var aniTime 		= 250; // The time of the animation. Make it lower to go faster!
	
	
	
	// When the mouse hovers over a hover_area div element
	$(".hover_area_small").mouseenter(function(){
			
			// Crop the image
			$(this).find("div").animate(
			{height: imageHeightsmall*croppedSizesmall},{duration: aniTime, queue: false});
			// Animate the text
			$(this).find(".funky_text").animate(
			{top: imageHeightsmall*croppedSizesmall},{duration: aniTime, queue: false});
			// Animate the colour
			$(this).find(".colour_image").animate(
			{opacity: 1.0},{duration: aniTime, queue: false});
			
	});
	
	// When the mouse hovers over a hover_area div element
	$(".hover_area_small").mouseleave(function(){
			
			// Change the height of the div element, i.e. uncrop the image
			$(this).find("div").animate(
			{height: imageHeightsmall},{duration: aniTime, queue: false});
			// Animate the text
			$(this).find(".funky_text").animate(
			{top: -imageHeightsmall*croppedSizesmall},{duration: aniTime, queue: false});
			// Animate the colour
			$(this).find(".colour_image").animate(
			{opacity: 0},{duration: aniTime, queue: false});
			
	});
	
	// LARGE IMAGES! When the mouse hovers over a hover_area div element
	$(".hover_area_large").mouseenter(function(){
			
			// Crop the image
			$(this).find("div").animate(
			{height: imageHeightlarge*croppedSizelarge},{duration: aniTime, queue: false});
			// Animate the text
			$(this).find(".funky_text").animate(
			{top: imageHeightlarge*croppedSizelarge},{duration: aniTime, queue: false});
			// Animate the colour
			$(this).find(".colour_image").animate(
			{opacity: 1.0},{duration: aniTime, queue: false});
			
	});
	
	// When the mouse hovers over a hover_area div element
	$(".hover_area_large").mouseleave(function(){
			
			// Change the height of the div element, i.e. uncrop the image
			$(this).find("div").animate(
			{height: imageHeightlarge},{duration: aniTime, queue: false});
			// Animate the text
			$(this).find(".funky_text").animate(
			{top: -imageHeightlarge*croppedSizelarge},{duration: aniTime, queue: false});
			// Animate the colour
			$(this).find(".colour_image").animate(
			{opacity: 0},{duration: aniTime, queue: false});
			
	});
	
	
	
	
	
});

// JavaScript Document