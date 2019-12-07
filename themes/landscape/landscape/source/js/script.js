(function($){
  //window.onload = function() {
    var top_count = 1;
    $('#more_top_users').on( "click", function() {

      var current_target = "#user" + top_count.toString();
      top_count += 1; // iterate for next time
      $(current_target).show();
    });

    var top_count_2 = 1;
    $('#more_top_rewards').on( "click", function() {

      var current_targets = "#reward" + top_count_2.toString();
      top_count_2 += 1; // iterate for next time
      $(current_targets).show();
    });

    //$('#maxwidth img').data('onload', 'pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);(function($){$("#maxwidth img").css("width", "100%");$("#maxwidth img").css("max-width", "100%");});');
  //}

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

})(jQuery);
