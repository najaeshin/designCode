$(".btn-select").click(function(){ //모바일 게임 탭 오픈
    var tabs = $(".tab-box .nav-tabs");
    var mobile =jQuery.browser.mobile;
    
    if(mobile == true){
        tabs.toggleClass("on");
    }
});

$(".tab-box .nav-tabs .nav-link").click(function(){ //모바일 게임 탭 선택
    var tabs = $(".tab-box .nav-tabs");
    var mobile =jQuery.browser.mobile;

    if(mobile == true){
        var sel_company = $(this).html()
        
        tabs.toggleClass("on");
        $(".btn-select").html(sel_company);
    }
    
});

$(".sidebar-link").click(function(){ //aside 오픈 시 스크롤 방지 & aside 닫기
    $(".sidebar.left").removeClass().addClass("sidebar left");
    $(".sidebar.right").removeClass().addClass("sidebar right modal-dialog-scrollable");
    $(".sidebar-toggle.rotated").css("transform", "rotateY(0deg)");
    $(".wrap").toggleClass("not-scroll");
})

$(".before-login .btn-join").click(function(){ 
    $(".sidebar.left").removeClass().addClass("sidebar left");
    $(".sidebar.right").removeClass().addClass("sidebar right modal-dialog-scrollable");
});

$(".transparent-btn").click(function(){ //모바일에서 메뉴, 내정보 오픈 시 스크롤 방지
    $(".wrap").toggleClass("not-scroll");
})

$(window).scroll(function(){ //header fixed 됐을 때 addClass
    var scroll_top = $( window ).scrollTop();
    //alert(scroll_top);
    if(scroll_top > 10){
        $(".header").addClass('scroll-top');
    } else {
        $(".header").removeClass().addClass("header fixed-top");
    }
})

$('.count').each(function () { //카운팅 애니매이션
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') }, {
        duration: 1200,
        easing: 'swing',
        step: function (now) {
        $this.text(Math.ceil(now));
        var values = $this.text();
        var values = String(values).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        $this.text(values);
        }
    });
});


