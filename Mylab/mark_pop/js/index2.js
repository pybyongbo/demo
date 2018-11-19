

window.onresize = function(){
            
               show_box();
               

  };

function show_box(){
     
     
        $('.lightbox').show();
        $('.close_pop').click(function() {
              $('.lightbox').hide();
        })
}    



$(function () {


     $("*").click(function (event) {
                if (!$(this).hasClass("down")&&!$(this).hasClass("downlist")){
                    $(".downlist").hide();
                }
                event.stopPropagation();   
            });

    // 计算收益
    var nhsyDefault = '请输入收益率';
    //var tip = $('.index_Calculator .tip');
    var reg = new RegExp("[0-9]+");
    var timeReg = new RegExp("^[0-9]*[1-9][0-9]*$");

    $('.input_text').focus(function () {
        //tip.hide();
        $(this).val('').css('color','#333');
    }).blur(function () {
        if($(this).val() == '') {
            if($(this).attr('id') == 'tzje' || $(this).attr('id') == 'tzqx') {
                $(this).val('');
            }
            else {
                $(this).val('请输入收益率').css('color','#b0b0b0');
            }
        }
    });
    
    // 选择投资期限
    var jzqxUnit = $('#jzqxUnit');
    jzqxUnit.click(function () {
        $(this).next('ul').show();
    });
    $('ul#dropdown li').click(function () {
        jzqxUnit.text($(this).text());
        $(this).parent().hide();
    });

    $('form').load(function(){
        var _this=$(this);
        
         $(this).submit(function(){
            $('#calcu-btn').click();
            return false;
        });
        
        $('#recalcu-btn').click(function(){
            _this.find('input').val(0);
            _this.submit();
        });
        
        $('#calcu-btn').click(function () {
            var type=$('#jzqxUnit').text();
            var money = parseFloat(_this.find('[name="money"]').val());
            var danwei = _this.find('[name="danwei"]').val();
            var qhl = _this.find('[name="qhl"]').val();
            var r_qhl = qhl/100;
            //if (money) {
                if(type=='月'){
                    var jishu=12;
                }else if(type=='日'){
                    var jishu=365;
                }
                var money_str = money+money * qhl / 100 / jishu * danwei + '';
                var pos=money_str.indexOf(".");
                money_str=pos==-1?money_str:money_str.substring(0, money_str.indexOf(".") + 3);
                $('#result').html(money_str);
                var resault=money+'+'+money + '*' + qhl + '/'+jishu+'*' + danwei;
                $('#gs').html(resault).attr("title",resault);
            //}
        });
    }).load();
});

function checkNum(obj){
    obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
    obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字而不是
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
    
    obj.value=obj.value.replace(/^(\d{12})([^.]+)(.*)/,'$1$3');//最大值1千亿
}





