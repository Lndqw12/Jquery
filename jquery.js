$(document).ready(function(){
    $(".btn-slide").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
});
$(document).ready(function(){
    $(".run").click(function(){
 
        $("#box").animate({opacity: "0.1", left: "+=400"}, 1200)
        .animate({opacity: "0.4", top: "+=160", height: "20", width: "20"}, "slow")
        .animate({opacity: "1", left: "0", height: "100", width: "100"}, "slow")
        .animate({top: "0"}, "fast")
        .slideUp()
        .slideDown("slow")
        return false;
    }); 
});
$(document).ready(function(){
 
    $("h2").append('<em></em>')
 
    $(".thumbs a").click(function(){
 
        var largePath = $(this).attr("href");
        var largeAlt = $(this).attr("title");
 
        $("#largeImg").attr({ src: largePath, alt: largeAlt });
 
        $("h2 em").html(" (" + largeAlt + ")"); return false;
    });
  
 });