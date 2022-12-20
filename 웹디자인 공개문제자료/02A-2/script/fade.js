$(function () {
  $(".ban li:gt(0)").fadeOut();
  //.end()현재선택된 요소의 이전요소선택
  function nextani() {
    $(".ban li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".ban");
  }
  function prevani() {
    $(".ban li:last").fadeOut(500).next().fadeIn(500).end().prependTo(".ban");
  }
  let inter = setInterval(nextani, 2000);
});
