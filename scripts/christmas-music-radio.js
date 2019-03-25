//Shake on click
$('#circle').click(function() {
  $("#circle").effect("shake");
});
      
//Array of elements needed in youtube embed. There mostly for compression of function.
var parts = ["<iframe class=\'music\'", " src=\"https://www.youtube.com/embed/videoseries?list=PLiXmRXnSGW4HxU-4GhzAgcd1sq5fnsNO3&autoplay=1&loop=1&index=", " frameborder=\"0\" allow fullscreen></iframe>"]
      
//Get random video and embed in site
function embed() {
  var index = Math.floor(Math.random() * 22);
  ($('#video')[0].innerHTML = parts[0] + parts[1] + index + "\"" + parts[2]);
  return index;
}
      
//Putting random video URL into HTML
$('#circle').click(embed);
