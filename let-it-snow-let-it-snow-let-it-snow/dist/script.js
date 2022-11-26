$(".snowflake").each(function() {
  $(this).css({
    top: $(this).data("transy") + "px",
    left: $(this).data("transx") + "%"
  });
  /*console.log($(".snowflake").length);*/
});
var counter = 0;
$(".hide-snow").click(function() {
  if (counter === 0) {
    $(this).text("Show snow");
    counter++;
  } else {
    $(this).text("Hide snow");
    counter = 0;
  }
  $(".snow-container").toggle();
});

/*Light*/
var isClick = false;
var startPos = $(".trigger-light").position().top;
var triggerAction = false;
var toggleAudio = 0;
$(".trigger-light").mousedown(function(e) {
  $(this).removeClass("triggerCable");
  $(".trigger-light").css({
      top: e.clientY - 50 + "px",
      left: e.clientX - 35 + "px"
    });
  return (isClick = true);
});
$(document).mouseup(function(e) {
  if(triggerAction == true){
    $(".trigger-light").addClass("triggerCable");
    $("h1").toggleClass("active");
    $(".cTree").toggleClass("lighted");
    $(".overlay-light,.lights").toggle();
    $(".pull-me").hide();
    toggleAudio ? toggleAudio = 0 : toggleAudio = 1;
    if(toggleAudio){
    document.getElementById("audioplayer").play();
    }else{
      document.getElementById("audioplayer").pause();
    }
    /*$("#audioplayer").play();*/
  }
  return (isClick = false);
});
$(".btn").click(function(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    $(this).removeClass("triggerCable");
    $(this).addClass("triggerCable");
    triggerAction ? triggerAction = false : triggerAction = true;
    if(triggerAction == true){
    $(".trigger-light").addClass("triggerCable");
    $("h1").toggleClass("active");
    $(".cTree").toggleClass("lighted");
    $(".overlay-light,.lights").toggle();
    $(".pull-me").hide();
    toggleAudio ? toggleAudio = 0 : toggleAudio = 1;
    if(toggleAudio){
    document.getElementById("audioplayer").play();
    }else{
      document.getElementById("audioplayer").pause();
    }
      $(".trigger-light").css({
      top: startPos + "px"
    });
    /*$("#audioplayer").play();*/
  }
  }
});

$(document).mousemove(function(e) {
  if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
  if(e.clientY - 50 < 250){
    currentPos = e.clientY - 50;
    triggerAction = false;
  }else{
    triggerAction = true;
    $(".pull-me").text("Click!");
  }
  if (isClick) {
    $(".trigger-light").css({
      top: currentPos + "px",
      left: e.clientX - 35 + "px"
    });
    $(".pull-me").css({
      top: currentPos + "px"
    });
  }else{
     $(".trigger-light").css({
      top: startPos + "px"
    });
  }
  }
});