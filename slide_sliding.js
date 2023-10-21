function slideSliding() {
  let $slide = $(".slideSliding");
  let $ul = $slide.find(".lists");
  let $lists = $slide.find("li");
  let count = $lists.length;
  let now = 0;
  let $pagers = $slide.find(".pager");
  const duration = 2000;
  const $indicator = $(".indicator");
  let $dots;
  let timer;
  let size;

  init();
  startSliding();

  $pagers.click(function (e) {
    $(this).hasClass("next") ? showNext() : showPrev();
  });

  $dots.click(function (e) {
    $dots.removeClass("on");
    update($(this).index());
  });

  function init() {
    createIndicator();
    slideSet();
    $dots = $indicator.find("button");
    $lists.eq(now).fadeIn();
    $dots.eq(now).addClass("on");
  }

  // 슬라이드 개수만큼 인디케이터 생성
  function createIndicator() {
    for (let i = 0; i < count; i++) {
      const $page = `<button type="button"><span class="blind">${
        i + 1
      }</span></button>`;
      $indicator.append($page);
    }
  }

  // 타이머 설정
  function startSliding() {
    timer = setInterval(showNext, duration);
  }

  function stopSliding() {
    clearInterval(timer);
  }

  $slide.on({
    mouseenter: stopSliding,
    mouseleave: startSliding,
  });

  // 슬라이드 위치 Set
  function slideSet() {
    size = $slide.innerWidth() * count;
    $ul.innerWidth(size);
  }

  // 슬라이드 보이기
  function showNext() {
    let next = (now + 1) % count;
    update(next);
  }

  function showPrev() {
    let prev = (now - 1) % count;
    update(prev);
  }

  function update(slide) {
    let pos = $slide.innerWidth() * slide;
    $ul.animate(
      {
        left: `-${pos}px`,
      },
      500
    );
    now = slide;
    $dots.removeClass("on");
    $dots.eq(now).addClass("on");
  }
}

slideSliding();
