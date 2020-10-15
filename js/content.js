$("#work").click (function(){

    $(".mywork").css("display","flex")
    $(".about").css("display","none")
    $(".contact-form").css("display","none")

});
$("#about").click (function(){

    $(".mywork").css("display","none")
    $(".about").css("display","flex")
    $(".contact-form").css("display","none")

});
$("#contact").click (function(){

    $(".mywork").css("display","none")
    $(".about").css("display","none")
    $(".contact-form").css("display","flex")

});
$(".btnx").click (function(){

    $(".mywork").css("display","none")
    $(".about").css("display","none")
    $(".contact-form").css("display","flex")

});


/* template designed by prasad Bedre */