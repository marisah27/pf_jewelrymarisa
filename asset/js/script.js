// JavaScript Document

// mainvisualスライドショー
$(function(){

  var dir = -1;
  var interval = 3000;
  var duration = 700;
  var timer;
  $("#slide ul").prepend($("#slide li:last-child"));
  $("#slide ul").css("left", -1000);
  timer = setInterval(slideTimer, interval);
  function slideTimer(){
    if(dir == -1){
      $("#slide ul").animate({"left" : "-=1000px"}, duration, function(){
        $(this).append($("#slide li:first-child"));
        $(this).css("left", -1000);
      });
    }else{
      $("#slide ul").animate({"left" : "+=1000px"}, duration, function(){
        $(this).prepend($("#slide li:last-child"));
        $(this).css("left", -1000);
        dir = -1;
      });
    }
  }
  
  
  $("#prevBtn").click(function(){
    dir = 1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    slideTimer();
  });
  $("#nextBtn").click(function(){
    dir = -1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    slideTimer();
  });

  
// caption画像のキャプション表示
  $("#caption li").append("<div>");
  $("#caption div").each(function(){
    $(this).html('<p>'+$(this).parent().children("img").attr("alt")+'</p>');
  });
  
    $("#caption li").hover(function(){
    $(this).children("div").stop().fadeIn(300);
    $(this).children("div").children("p").stop().fadeIn(300);
  },function(){
    $(this).children("div").stop().fadeOut(300);
      $(this).children("div").children("p").stop().fadeOut(300);
  });
//スライドメニュー
  .slidemenu_bt
  
});