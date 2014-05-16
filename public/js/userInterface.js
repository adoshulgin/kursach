$(document).ready(function(){

    $('#bigButton').click(function () {
        $("#bigButton").css("display", "none");
        $("#step1").css("display", "block");
    });

    $('#button').click(function () {
        $("#button").css("display", "none");
        $("#step1").css("display", "none");
        $("#step2").css("display", "block");
    });

});