$(document).ready(function(){

    $('#bigButton').click(function () {
        $("#bigButton").css("display", "none");
        $("#step1").css("display", "block");
        $("information").css("display","none");
    });

    $('#sourceButton').click(function () {
        $("#sourceButton").css("display", "none");
        $("#step1").css("display", "none");
        $("#step2").css("display", "block");
    });

    $('#info_button').click(function () {
        $("#information").css("display", "block");

    });
    $('#info_close').click(function () {
        $("#information").css("display", "none");

    });

    $("#end_button").click(function(){
        var dataSource=$('input[name="serviseType"]:checked').value();
        var time=$('input[name="time"]:checked').value();
        $.ajax({

            type: "POST",
            url: "/config",
            data: { dataSource: dataSource, time: time},
            success: function (d) {
                $("#oops").html('что нибудь');


            }
        });
    });
});
