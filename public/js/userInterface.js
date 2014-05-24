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

    $("#submitButton").click(function(){
        var sourceUrl = $('#ulr').val();
        $.ajax({
            type: "POST",
            url: "/config",
            data: { sourceUrl: sourceUrl},
            success: function (d) {
            }
        });
    });
});
