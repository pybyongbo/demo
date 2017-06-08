var vm = new Vue({
    el: '.container',
    data:{
        limitNum:3,
        moreFlag:false,
        addressList: [],
        currentIndex:0,
        shippingMethod:1,
        curAddress:"",
        delFlag:false,
        addpopFlag:false, //新增地址弹出层
        userName:"",
        streetName:"",
        userPhone:"",
    },
    mounted:function(){

        this.$nextTick(function(){
            this.getAddressList();
        });
    },
    computed:{

        filterAddress:function(){
            return this.addressList.slice(0,this.limitNum);
        }
    },
    methods:{

        getAddressList: function() {
            var _this = this;
            this.$http.get("data/address.json").then(function(response) {
                // console.log(response.body.result);
                console.log(response);
                
                if (response.status == "200") {
                    _this.addressList = response.body.result;

                    if(_this.addressList.length>3) {
                        _this.moreFlag = true;
                    }

                }
            });
        },
        //展开所有的功能也可以写成方法，然后调用
        loadMore:function(){
            if(this.limitNum!=this.addressList.length) {
                this.limitNum = this.addressList.length;
                // this.moreFlag = false;
                $(".up-down-btn span").text("收起")
            } else {
                this.limitNum = 3;
                $(".up-down-btn span").text("more")
            }
         
        },
        setDefault:function(addressId){
            this.addressList.forEach(function(address,index){
                if(address.addressId==addressId){
                    address.isDefault = true;
                }else{
                    address.isDefault = false;
                }
            });
        },

        //删除按钮弹出层事件
        delConfirm:function(item) {

            this.delFlag = true;
            this.curAddress = item;

        },
        delAddress:function(){

            var index = this.addressList.indexOf(this.curAddress);
            this.addressList.splice(index,1);
            this.delFlag = false;

        },

        //新增弹出层
        popConfirm:function() {
            this.addpopFlag = true;
            this.addressId="";
            this.userName="";
            this.streetName="";
            this.postCode="";
            this.userPhone="";
            this.isDefault="false";

        },

        saveData:function(){

            if(this.userName !="" && this.streetName !="" && this.userPhone !="") {
                 this.addressList.push({
                      "addressId":Math.floor(Math.random()*10)+100000,
                      "userName":this.userName,
                      "streetName":this.streetName,
                      "postCode":"100001",
                      "tel":this.userPhone,
                      "isDefault":false
                    });
                alert("新增成功!");
                this.addpopFlag = false;

            } else {

                alert("请填写完整信息")
            }
            

        }
    }

});