require("../css/mine.scss");
var mine = new Vue({
    el: "#app",
    data: {
      userMsg:"",
    },
    methods: {
        moreShow: function() {
            let flag = $("#aboutMine").attr('data');
            if (flag == 0) {
                $("#aboutMine").css('width', '45%');
                $("#content").css('width', '55%');
                $("#aboutMine").attr('data', "1");
                $("#aboutMine").show();
            } else {
                $("#aboutMine").css('width', '0%');
                $("#content").css('width', '100%');
                $("#aboutMine").attr('data', "0");
                $("#aboutMine").hide();
            }
        },
        loginOut: function() {
            $.post('/loginOut', function(data) {
                if (data == 1) {
                    location.reload();
                } else {
                    alert('退出失败');
                }
            });
        }
    },
    compiled: function() {

    },
    ready: function() {
        var mc = new Hammer(document.getElementById('content'));
        mc.on("panleft", function(e) {
            if (e.type === "panleft") {
                $("#aboutMine").css('width', '0%');
                $("#content").css('width', '100%');
                $("#aboutMine").attr('data', "0");
                $("#aboutMine").hide();
            }
        });

        $.post('/userMsg_interface',function(data) {
          mine.userMsg=data.data[0];
        });
    },

});
