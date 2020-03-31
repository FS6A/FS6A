var mode_is = 0;
AOS.init();

$(document).ready(function(){

try {
 Set_bytime()
}catch(err) {
   Set_bytime()
}
});

function Set_bytime() {
	var hour = new Date().getHours();
  if (hour >= 12) {
    Set_Dark()
    mode_is = 0
  } else {
    Set_light()
    mode_is = 1
  };

$( "#bt-color" ).click(function() {
  //$("div, nav").fadeOut(100).fadeIn(65); 
if (mode_is == 0) {
  Set_light()
	mode_is = 1
} else {
  Set_Dark()
	 mode_is = 0
}
});
}


  this.addEventListener('activate', function(event) {
  var cachesToKeep = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cachesToKeep.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

function Set_light() {
  $(".noeff").css("color", "#000000")
  $(".cardmode").css("background-color","#f3f3f3");
  $(".cardmode").css("color","#000000");
  $("body").css("background-color","#fff");
   //$('#bt-color').text("Dark");
   
    $('#bt-color').addClass('btn-dark').removeClass('bg-light');
	$('nav').css("background-color","#fff");
	$('nav, #text_is').css("color","#212529");
}
function Set_Dark() {
  $(".noeff").css("color", "#fff")
 $(".cardmode").css("background-color","#343a40");
  $(".cardmode").css("color","#fff");
  $("body").css("background-color","#202020");
  //$('#bt-color').text("Light");
  $('#bt-color').addClass('bg-light').removeClass('btn-dark');
  $('nav').css("background-color","#202020");
   $('nav, #text_is').css("color","#fff");
}
if(navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPod/i)) {
    $("a[href='https://instagram.com/mmti.done']").attr('href', 'instagram://user?username=mmti.done')
 }