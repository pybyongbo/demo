var vm = new Vue({

    el: "#app",
    data: {
        totalMoney: 0,
        checkNum: 0,
        productList: [],
        checkAllFlag: false,
        delFlag:false,
        curProduct: ''

    },

    filters: {
        formatMoney: function(value) {
            return "￥" + value.toFixed(2)
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.cartView();
        })
    },

    methods: {

        cartView: function() { //数据列表渲染
            var _this = this;
            this.$http.get("data/cart.json").then(function(res) {

                _this.productList = res.body.result.productList;
                _this.totalMoney = res.body.result.totalMoney;

            })
        },

        changeMoney: function(product, way) {

            if (way > 0) {

                product.productQuantity++;

            } else {

                product.productQuantity--;
                if (product.productQuantity < 1) {

                    product.productQuantity = 1;
                }
            }

            this.calcTotalPrice();
        },

        // 判断是否先中了按钮
        selectedProduct: function(item) {
            var _this = this;
            if (typeof item.checked == 'undefined') { //判断是否未定义，如果没点击过按钮是没有注册的，则需要先注册checked属性
                this.$set(item, "checked", true); //局部注册
            } else {
                item.checked = !item.checked;
            }

            if (item.checked == true) {
                _this.checkNum++;
            } else {
                _this.checkNum--;
            }



            if (_this.checkNum == this.productList.length) {
                _this.checkAllFlag = true;
            } else {
                _this.checkAllFlag = false;

            }
            this.calcTotalPrice();
            console.log(_this.checkNum);
        },

        // 全选与取消全选,点击全选时候,flag为true,取消时候为false
        checkAll: function(flag) {

            this.checkAllFlag = flag;
            var _this = this;
            _this.productList.forEach(function(item, index) {

                if (typeof item.checked == 'undefined') {

                    _this.$set(item, "checked", _this.checkAllFlag); //通过set来给item添加属性checked
                    _this.checkNum = _this.productList.length;

                } else {

                    item.checked = _this.checkAllFlag;
                    _this.checkNum = 0;

                }


            });

            this.calcTotalPrice();
        },

        //计算总金额
        calcTotalPrice: function() {

            var _this = this;
            this.totalMoney = 0;
            this.productList.forEach(function(item, index) {
                if (item.checked) {

                    _this.totalMoney += item.productPrice * item.productQuantity;

                }
            })


        },

        //确定删除
        delConfirm:function(item) {

            this.delFlag = true;
            this.curProduct = item;

        },
        delProduct:function(){

            var index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index,1);
            this.delFlag = false;
            this.calcTotalPrice();
            

        },

        //结算链接跳转判断:
        linkBuy:function() {

            var _this = this;
            if(_this.totalMoney==0) {

                alert("你还没有选中任何商品哦!");
                return false;

            } else {

                window.location.href="address.html";
            }
        }


    }


});


//全局过滤器,可以在任何一个页面使用.

Vue.filter("money", function(value, type) {

    return "￥" + value.toFixed(2) + type;

})
