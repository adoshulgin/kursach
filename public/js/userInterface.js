$(document).ready(function(){

    $('#bigButton').click(function () {
        $("#bigButton").css("display", "none");
        $("#step1").css("display", "block");
    });

    $('#sourceButton').click(function () {
        $("#sourceButton").css("display", "none");
        $("#step1").css("display", "none");
        $("#step2").css("display", "block");
    });

    $('#timeButton').click(function () {
        $("#timeButton").css("display", "none");
        $("#step2").css("display", "none");
        $("#step3").css("display", "block");
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
