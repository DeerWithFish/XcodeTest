
var app = new Vue({
    el: '#app',
    data: {     
        list: [],
        list_columns: [
            {
                title: 'Name',
                key: 'Name',
                slot: 'show_name'
            },
            {
                title: 'DisplayName',
                key: 'DisplayName'
            },
            {
                title: 'UpdateTime',
                key: 'UpdateTime'
            },
            {
                title: 'Action',
                slot: 'action',
                width: 150,
                align: 'center'
            }
         
        ],
        add_modal: false,//模态框
        add_user: {
            Name: "",
            DisplayName: "",
        },
        ruleValidate: {
            name: [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ],
            DisplayName: [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ],
        }
    
    },
    mounted: function () {
        let vue = this;

        this.onload();//需要触发的函数
    },
    methods: {
        onload: function () {
            this.GetUserList();
        },
        ok(name) {
            alert(name);
            //this.$Message.info('Clicked ok');
        },
        cancel() {
            //this.$Message.info('Clicked cancel');
        },
        showInfo(index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.list[index].Name}<br>DisplayName:${this.list[index].DisplayName}`
            })
        },
        remove(index) {
            this.list.splice(index, 1);
        },
        GetUserList: function () {
            let vue = this;

            axios.get('../Home/GetUserList')
                .then(response => {
                    // 处理响应数据
                    console.log(response.data);
                    vue.list = JSON.parse(response.data.list);
                })
                .catch(error => {
                    // 处理错误
                    console.log(error);
                });

        },
    }
})