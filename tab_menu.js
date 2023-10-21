$(function() {


  function tabMenu() {
    $(".tabMenu").tabs({
      hide: { duration: 250 },
      show: { duration: 125 },
    
      // 로딩, 탭선택시 액티브상태표시
      create: moveActive,
      activate: moveActive,
    });
    
    function moveActive(e, ui) {
      let $newTab = ui.newTab || ui.tab;
      let left = $newTab.position().left;
      $(".gnb li").removeClass("on");
      $newTab.addClass("on");
      $(".bar").animate(
        {
          left: left,
        },
        500,
        "easeOutExpo"
      );
    }
  }

  function dragContent() {
    $( ".contents" ).draggable();
  };

  tabMenu();
  dragContent();
  
})

 