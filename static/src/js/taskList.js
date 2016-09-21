require("../css/taskList.scss");
var taskList = new Vue({
    el: "#app",
    data: {
        taskInfo: "",
        taskNum: "",
    },
    methods: {
        back: function() {
            history.go(-1);
        },
        taskMore:function(id){
          location.href="/taskMore?taskId="+id;
        }
    },
    compiled: function() {

    },
    ready: function() {
        $.post('/taskList_interface', function(data) {
            taskList.taskNum = data.data.length;
            if (data.data == "") {
                console.log("error");
            } else {
                taskList.taskInfo = data.data;
            }
        });
    },

});
