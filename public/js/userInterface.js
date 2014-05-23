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
        var state = $('#timeSelector').prop('checked');
        var dataSource;
        //var Selectedtime =  $('input:checkbox[name=timeSelector]:checked').val;
        var sourceUrl = [];
        $.ajax({
            type: "POST",
            url: "/config",
            data: { dataSource: 1234, Selectedtime: state},
            success: function (d) {
                $("#oops").html('что нибудь');
                console.log("Yay", state);
            }
        });
    });
});
