$(function() {

	var btn = $('#J-app-header-openChagneRegion'),wrap = $('#J-g-chagneRegion');

	wrap.css({left:btn.offset().left,top:btn.offset().top+btn.height()+8});

	//console.log(this.$citylist=wrap.find("a"));
	this.$citylist = wrap.find('a')
	this.$citylist.each(function(index,element) {

		var $el = $(this);
		var code = $el.attr("code");
		var title =$el.attr("title");
		var tabs = $('#J-g-chagneRegion ul').find('li');
		$el.on('click',function(e) {
			$.cookie('location',code,{expires:7,path:'/',domain:'/MyJstest/weilver/'});
			//window.location.href = "/index/"+code+".html";
			$('.region h3').text(title);

			tabs.removeClass('active')
		   $el.parent().addClass('active');
		})
	})

	//点击切换:
	btn.on('click',function(e){

		e.preventDefault();
		wrap.hasClass('g-hidden')?wrap.removeClass('g-hidden'):wrap.addClass('g-hidden');

	})

	//点击其他区域影藏
	$(document).on('click',function(e) {

		var target = e.target;
		if(!btn.is(target) && !wrap.is(target) && wrap.has(target).length ===0) {

			wrap.addClass('g-hidden');
		}

	})
	//

})