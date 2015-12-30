/**妙味课堂js
第一节:热身运动课后练习
date:20121226
**/
window.onload = function(){

	var oBtn = document.getElementById("setBtn");
	var mask = document.getElementById("mask");
	var close = document.getElementById("close");
	var setdivstyle = document.getElementById("setdivstyle");
	var winWidth = document.documentElement.clientWidth;
	var winHeight = document.documentElement.clientHeight;

	var box = document.getElementById("box");
	var colorArr = ['red','yellow','blue'];
	var whArr = ['200','300','400'];

	var cancel = document.getElementById("cancel");
	var surebtn = document.getElementById("surebtn");


	var cSpan = getByClass(document, 'bg');
	var wSpan = getByClass(document, 'w');
	var hSpan = getByClass(document, 'h');

	var left = (winWidth-498)/2+'px';
	var top = (winHeight-300)/2+'px';

	oBtn.onclick = function(){

		showsetDiv(left,top);
		
	};

	close.onclick =surebtn.onclick= hideDiv;

	cancel.onclick = function(){

		box.style.background ="none";
		box.style.width ="150px";
		box.style.height ="150px";
		hideDiv();
	}

	window.onresize = function(){

		var winWidth = document.documentElement.clientWidth;
		var winHeight = document.documentElement.clientHeight;
		var left = (winWidth-498)/2+'px';
		var top = (winHeight-300)/2+'px';
		var status = document.getElementById("mask").style.display;

		if(status == "block")
		{
		  showsetDiv(left,top);
		}
		
	}

	function showsetDiv(left,top){

		mask.style.display = "block";
		setdivstyle.style.left=left;
		setdivstyle.style.top=top;
	}

	function hideDiv(){

		mask.style.display = "none";

	}

	//改变颜色
	for(var i=0;i<cSpan.length;i++) {

		(function(k) {

			cSpan[i].onclick= function(){
				box.style.background = colorArr[k];
				console.log(k)
			}


		})(i)

	}	

	//改变宽高
	for(var i=0;i<wSpan.length;i++) {

		(function(k) {

			wSpan[i].onclick= function(){
				box.style.width = whArr[k]+'px';
			}


		})(i)

	}

	for(var i=0;i<hSpan.length;i++) {

		(function(k) {

			hSpan[i].onclick= function(){
				box.style.height = whArr[k]+'px';
			}

		})(i)

	}
	
	
	//用正则封装一个获取class的方法
    function getByClass(oParent, sClass) {

        var aEle = oParent.getElementsByTagName('*');
        var result = [];

        var re = new RegExp('\\b' + sClass + '\\b', 'i');

        for (var i = 0; i < aEle.length; i++) {

            if (re.test(aEle[i].className)) {

                result.push(aEle[i]);
            }
        }

        return result;

    }



}