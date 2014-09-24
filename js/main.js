$(function() {
   var timeOut;
   var $document = $(document);
   var docwidth = $(document).width();
   var windowwidth = $(window).width();

$('article').isotope({
    itemSelector : '.tile',
    masonry: {
        columnWidth: 100
    }
});

   zipgallery = {
      init: function() {
         zipgallery.setImageSizeTile();
      },
      setImageSizeTile: function() {
		 
		  $( ".tile" ).each(function( index, element ) {
			$( element ).find('img').css( "height", "auto" );
			if ( $( this ).height() > $( this ).find('img').height() ) {
				$( element ).find('img').css( "height", $( this ).height() );
			  return false;
			}	
  });		  		  
$( ".tile" ).find('img').click(function() {
$(".tile-hanger").css( "overflow","visible" );
var boxPosX = $(this).offset().left;
var boxPosY = $(this).offset().top;
$(".tile-hanger").animate({left: -boxPosX}, 1000);
$(".tile-hanger").animate({top: -boxPosY+50}, 1000);
$(".tile-hanger").find("div").removeClass("zoomed");
$(".tile-hanger").find("div").css("z-index", 0);
console.log($(".tile-hanger").find("div").removeClass("zoomed"));
$( this ).parent().parent().siblings('zoomed').css( "z-index", 0 );
$( this ).parent().parent().width($( this ).width());
$( this ).parent().parent().height($( this ).height());
$( this ).parent().parent().css("z-index", 9999);
$( this ).parent().parent().addClass('zoomed');
$( this ).parent().parent().find(".image-details").show();
$("#overlay").show();
});
 $("#overlay").click(function(event) {
						  
		$(".tile-hanger").animate({left: 0}, 1000);
		$(".tile-hanger").animate({top: 0}, 1000);

		if ( $(".gallery-container .tile-hanger .tile").hasClass("zoomed") ) {
		  $('.gallery-container .tile-hanger .tile').removeClass('zoomed');
		  $('.gallery-container .tile-hanger .tile').css("z-index", "auto");
		  $('.gallery-container .tile-hanger .tile').css("width", "").css("height", "auto");
}
	  $( this ).parent().parent().find(".image-details").hide();		  
      $("#overlay").hide();	  
	  $('div.image-details').each(function() {
  	  $(this).hide();
});	  
      event.preventDefault();
   });		  
},
      hideCountryPopup: function() {
         countryPopup.removeClass('show');
      },
	  hideoverlay: function() { 
 	  $("#overlay").hide();
}
   },
   zipgallery.init();
});



