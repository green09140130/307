$(function () {
  function nextani() {
    $(".ban").animate({ marginTop: "-300px" }, 500, function () {
      $(".ban li").eq(0).appendTo(".ban");
      $(".ban").css({ marginTop: "0" });
    });
  }
  function prevani() {
    $(".ban li").eq(2).prependTo(".ban");
    $(".ban").css({ marginTop: "-300px" });
    $(".ban").animate({ marginTop: "0" }, 500);
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
