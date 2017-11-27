$(() => {
  console.log('this is jquery and im loaded');

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $('a').on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  // <p id="example4"></p>

  $('#example4').typeIt({
    speed: 50,
    autoStart: false
  })
    .tiType('Wll')
    .tiPause(500)
    .tiDelete(2)
    .tiType('ell, ')
    .tiPause(1000)
    .tiType('I guess I\'m typing..')
    .tiBreak() .tiPause(750)
    .tiType(' but I don\'t really know what to say')
    .tiSettings({speed: 700})
    .tiType('...')
    .tiPause(750)
    .tiSettings({speed: 50})
    .tiDelete()
    .tiType('IS THAT SO <strong>WRONG??</strong>');


});
