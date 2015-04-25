setInterval(function(){

  $.getJSON("http://api.giphy.com/v1/gifs/random?tag=cats&rating=pg&api_key=dc6zaTOxFJmzC",
    function(response){
      var url = response.data.image_original_url;
      $('body').attr('style', "background-image: url('" + url + "');");
  });


},6000);


