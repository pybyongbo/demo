/**
tooltips效果仿写
http://www.cnblogs.com/QLeelulu/archive/2008/03/09/1097368.html
date:20160103
**/
$(function(){

	//alert($("[myTip]").html());
	$("[myTip]").hover(function() {

		/* Stuff to do when the mouse enters the element */
        $('<div id="luluTip"><div class="triangle"></div>') 
        .insertAfter(this).prepend($(this).attr("myTip"));

        $(this).mousemove(function(event) {
        	/* Act on the event */
            event = event || window.event;
            var x = event.pageX -36;

            $("#luluTip").css({"left":x,"top":event.pageY+28,"display":"block"});
            //$("#luluTip").css({"display":"block"});
           /*
            if(x-2<0) {

            	x=2;

            }

            if(x+152>document.body.clientWidth) {

            	x = document.body.clientWidth-152;

            	$("#luluTip").css({"left":x,"top":event.pageY+18,"display":"block"});

            }
            */
                 

        });

	}, function() {
		/* Stuff to do when the mouse leaves the element */

		$("#luluTip").remove();

	});


})