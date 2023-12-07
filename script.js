$(document).ready(function(){
    $("button").on( "click", function(e) {
        e.preventDefault();
        var email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if(!email.test($("#email").val()) || $("#email").val()==""){
            $("form").css("border", "2px solid hsl(0, 93%, 68%)");
            $(".labelError").fadeIn();
            $(".errorMsg").fadeIn();
        }else{
            $("form").css("border", "1px solid hsl(0, 36%, 70%)");
            $(".labelError").fadeOut();
            $(".errorMsg").fadeOut();
        }
    });
});