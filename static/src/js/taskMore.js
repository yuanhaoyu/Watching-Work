require("../css/taskMore.scss");
var taskMore = new Vue({
    el: "#app",
    data: {
      taskInfo:"",
      taskCommitInfo:"",
      CommitNum:"",
    },
    methods: {

    },
    compiled: function() {

    },
    ready: function() {
      var taskId=getUrl("taskId");
      $.post('getTaskById_interface', {"taskId":taskId}, function(data) {
        taskMore.taskInfo=data.data[0];
      });
      $.post('taskMore_interface', {"taskId":taskId}, function(data) {
        taskMore.CommitNum=data.data.length;
        taskMore.taskCommitInfo=data.data;
      });

    },

});
