(function($){
  $(function(){

    $('.button-collapse').sideNav();
    
    /* quotes slider at footer */
    $("#quotes").owlCarousel(
        {
            navigation : false,
            slideSpeed : 300,
            singleItem : true,
            paginationSpeed : 400,
            autoPlay : true,
            pagination : false,
        }       
    );
    /*  end of quotes slider */
    
    /*
     * bootstrap tooltip used in archieve more
     */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });
    /*
     * end of archieve tooltip
     */          
    
    /*
     * animation used while page loading wow animation
     */
    var wow = new WOW(
      {
        boxClass:     'wow',      // a$('.metisFolder').metisMenu({
        toggle: false,
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)

        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        }
      });
    wow.init();

    /*
     * end of page load animation
     */
    
    /*
     * metis menu used for archieve
     */
    
    $(function() {
        $('#archieve').metisMenu({
          toggle: true
        });
      });
      
    /*
     * end of metis menu
     */

  }); // end of document ready
})(jQuery); // end of jQuery name space