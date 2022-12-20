$(function () {
  function nextani() {
    $(".ban").animate({ marginLeft: "-1200px" }, 500, function () {
      $(".ban li").eq(0).appendTo(".ban");
      $(".ban").css({ marginLeft: "0" });
    });
  }
  function prevani() {
    $(".ban li").eq(2).prependTo(".ban");
    $(".ban").css({ marginLeft: "-1200px" });
    $(".ban").animate({ marginLeft: "0" }, 500);
  }
  let inter = setInterval(nextani, 2000);
  $(".slide").hover(
    function () {
      clearInterval(inter);
    },
    function () {
      inter = setInterval(nextani, 2000);
    }
  );
  $(".left").click(function () {
    prevani();
  });
  $(".right").click(function () {
    nextani();
  });
});
