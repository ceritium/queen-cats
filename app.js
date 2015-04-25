var images = [];
function loadImages(){
  $.getJSON("http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC",
    function(response){
      $(response.data).each(function(index, item){
        images.push(item.images.original.url);
      });
  });
}

loadImages();
setInterval(function(){
  if (images.lenght < 2) {
  }
  var img = images.shift();
  $('body').attr('style', "background-image: url('" + img + "');");
},6000);


