
jQuery(document).ready(function () {

// Script for Scroll Top
	 var offset = 300,
	  offset_opacity = 1200,
	  scroll_top_duration = 700,
	  $back_to_top = $('.cd-top');
	
	 //hide or show the "back to top" link
	 $(window).scroll(function(){
	  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
	  if( $(this).scrollTop() > offset_opacity ) { 
	   $back_to_top.addClass('cd-fade-out');
	  }
	 });
	
	 //smooth scroll to top
	 $back_to_top.on('click', function(event){
	  event.preventDefault();
	  $('body,html').animate({
	   scrollTop: 0 ,
		}, scroll_top_duration
	  );
	 });
	 
	 });
	 
	 
	 
	 
	 
	//COMPANY
    $(document).ready(function() {
     
      var owl = $("#owl-demo");
     
      owl.owlCarousel({
         
          itemsCustom : [
            [450, 2],
            [767, 3],
      
            [768, 4],
           ],
          navigation : true
     
      });
     
    });
	
	
	
	
	
	 //TESTMONIALS
	

    


	
	 