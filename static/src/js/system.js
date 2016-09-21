require("../css/system.scss");
var index = new Vue({
    el: "#app",
    data: {

    },
    methods: {
      footerUrl:function(msg){
        if(msg=='myIndex'){
          location.href="/myIndex";
        }
        else if (msg=='other') {
          location.href="/other";
        }
        else if (msg=='system') {
          location.href="/system";
        }
      },
      back:function(){
        history.go(-1);
      },
      loginOut:function() {
        $.post("/loginOut",function(data){
          if(data=='1'){
            location.href="/";
          }
        },"json");
      }
    },
    compiled: function() {

    },
    ready: function() {

    },

});
