function casesfirst() {
    $('.cases-first-banner-img').animate({opacity: 1}, 500);
    $('.cases-first-title').delay(500).animate({opacity: 1}, 500);
    $('.cases1').delay(1000).animate({opacity: 1}, 500);
}

$(function () {getUser('cases');
        demo_menu();
        casesfirst();

        getVisit()
        load();


        window.addEventListener('scroll', function () {
            head(3);
            if ($('.index-third-dome').css("opacity") != 1) {
                load();
            }
            var head_hight = $(document.documentElement).scrollTop() + $(document.body).scrollTop();  // 目前监听的是整个body的滚动条距离
            if (head_hight > 30) {
                $('.index-first-down-img').animate({opacity: 0}, {queue: false, duration: 100});
            } else if (head_hight < 30) {
                $('.index-first-down-img').animate({opacity: 1}, {queue: false, duration: 100});
            }
            $(".head-nav-demo-list").slideUp(400);
        })


    }
);


function load() {
    head(3);

    var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
    var wTop = $(window).height();//浏览器可视高度
    var eTop = 0;
    eTop = $('.cases2').offset().top;//容器距离整个页面顶部的距离
    if (dTop + wTop - ($('.cases2').height() * 0.25) - 50 > eTop) {
        $('.cases2').animate({opacity: 1}, 500);
    }
    eTop = $('.cases3').offset().top;
    if (dTop + wTop - ($('.cases3').height() * 0.25) - 50 > eTop) {
        $('.cases3').animate({opacity: 1}, 500);
    }

    eTop = $('.cases-third-title').offset().top;//容器距离整个页面顶部的距离
    if (dTop + wTop - ($('.cases-third-title').height() * 0.25) - 100 > eTop) {
        $('.cases-third-title').animate({opacity: 1}, 500);
    }
    eTop = $('.cases-third-banner').offset().top;
    if (dTop + wTop - ($('.cases-third-banner').height() * 0.25) - 50 > eTop) {
        $('.cases-third-banner').animate({opacity: 1}, 500);
    }
    eTop = $('.cases-third-banner2').offset().top;//容器距离整个页面顶部的距离
    if (dTop + wTop - ($('.cases-third-banner2').height() * 0.25) - 50 > eTop) {
        $('.cases-third-banner2').animate({opacity: 1}, 500);
    }
    eTop = $('.cases-third-banner3').offset().top;
    if (dTop + wTop - ($('.cases-third-banner3').height() * 0.25) - 50 > eTop) {
        $('.cases-third-banner3').animate({opacity: 1}, 500);
    }
}
