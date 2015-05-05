// JavaScript Document
$(document).on("pagecreate","#page2",function(){
	$("p").on("swipe",function(){
		$("span").text("Swipe activado!");
	});
});