
var app = new Vue({
    el: '#app',
    data: {
        visible: false
    },
    mounted: function () {
        let vue = this;

        this.onload();//需要触发的函数
    },
    methods: {
        onload: function () {
            this.GetUserList();
        },
        GetUserList: function () {


            axios.get('../Home/GetUserList')
                .then(response => {
                    // 处理响应数据
                    console.log(response.data);
                })
                .catch(error => {
                    // 处理错误
                    console.log(error);
                });

        },
        show: function () {
            this.visible = true;
        }
    }
})