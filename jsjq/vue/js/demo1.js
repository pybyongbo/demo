var _list = [{name:"小明",age:23, checked: false},{name:"小红",age:20, checked: false},{name:"ddd",age:30, checked: false}];

new Vue({
    el: '.app',
    computed: {
        allChecked: {
            get: function(){
                return this.checkedCount == this.list.length;
            },
            set: function(value){
                this.list.forEach(function(item){
                    item.checked = value
                })
                return value;
            }
        },
        checkedCount: {
            get: function(){
                var i = 0;
                this.list.forEach(function(item){
                    if(item.checked == true) i++;
                })
                return i;
            }
        }
    },
    data:{
        list: _list
    }
});