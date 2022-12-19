$(function () {
  let current = 1;
  $(".gallery a").eq(0).find("img").addClass("on");
  function effectImg(im, pa) {
    im.attr("src", pa)
      .css("opacity", "0")
      .stop()
      .animate({ opacity: "1" }, 500);
  }
  let interval = setInterval(inermove, 2000);

  function inermove() {
    if (current < 3) {
      current = current + 1;
    } else {
      current = 1;
    }
    console.log(current);
    $(".gallery a")
      .find("img")
      .each(function () {
        if ($(this).hasClass("on")) {
          $(this).removeClass("on");
        }
      });
    $(".gallery a")
      .eq(current - 1)
      .find("img")
      .addClass("on");
    //1->0  2-->1 3-->2
    let path = "../images/photo" + current + ".jpg";
    effectImg($("#bigimg img"), path);
  }
  $(".gallery a").hover(
    function () {
      clearInterval(interval);
    },
    function () {
      interval = setInterval(inermove, 2000);
    }
  );
  $(".gallery a").click(function (e) {
    e.preventDefault();
    let path = $(this).attr("href");
    $(".gallery a")
      .find("img")
      .each(function () {
        if ($(this).hasClass("on")) {
          $(this).removeClass("on");
        }
      });
    $(this).find("img").addClass("on");
    effectImg($("#bigimg img"), path);
  });
});
