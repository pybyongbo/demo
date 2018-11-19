$(function () {
	$("#use").click(function(){
		bootstro.start();
		$('.navbar-over').show();
	});
	
	$('a').bind("focus", function(){
		$(this).blur();
	})
	
	$('.video').width('100%').height('100%');

	$('.video').height($('.video').width() / 1.333, 'px');

	$(window).resize(function () {
		$('.video').height($('.video').width() / 1.333, 'px');
	});

	$('.list li a').each(function (e) {
		if ($('.break_title').text() != '' && $(this).text().indexOf($('.break_title').text()) >= 0) {
			$(this).parent().addClass('active');
			$(this).attr('href' , 'javascript:void(0)');
		}
	});
	
	setTimeout(function () {
		$('.bs-docs-sidenav').affix({
			offset: {
			top: function () { return $(window).width() <= 980 ? 290 : 260 }
			, bottom: 270
			}
		})
	}, 100)
	$("img.lazy").lazyload();
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '', // Text for element
		activeOverlay: false  // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
});


function chkFlash() {
  var isIE = (navigator.appVersion.indexOf("MSIE") >= 0);
  var hasFlash = true;

  if(isIE) {
    try{
      var objFlash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
    } catch(e) {
      hasFlash = false;
    }
  } else {
    if(!navigator.plugins["Shockwave Flash"]) {
      hasFlash = false;
    }
  }
  return hasFlash;
}




