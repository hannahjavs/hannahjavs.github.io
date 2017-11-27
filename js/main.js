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

    // AUTO TYPING
    $('#autotype').typeIt({
      speed: 50,
      autoStart: false,
      loop: true
    })
      .tiType('Hll')
      .tiPause(500)
      .tiDelete(2)
      .tiType('ello, ')
      .tiPause(1000)
      .tiType('I\'m Hannah Jadavji,')
      .tiBreak() .tiPause(750)
      .tiType(' a full stack web developer')
      .tiSettings({speed: 700})
      .tiType('...')
      .tiPause(750)
      .tiSettings({speed: 50})
      .tiDelete()
      .tiType('Click a link below to see me <strong>development</strong> work');

  });

});
