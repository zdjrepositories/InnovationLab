function indexfirst() {
    $('.index-first-banner-bg').animate({opacity: 1}, 500);
    $('.index-first-banner-title-bottom').delay(1000).animate({opacity: 1}, 1000);
    $('.index-first-down-img').delay(1600).animate({opacity: 1}, 350);
    $('.index-first-banner-title-top').delay(300).animate({opacity: 1}, 1000);
    $('.index-first-banner-title-bottom').delay(900).animate({opacity: 1}, 1000);
    $('.index-first-down-img').delay(1000).animate({opacity: 1}, 350);
}

$(function () {
getUser('index');
        demo_menu();
        indexfirst();
        getLike();
        getVisit();

        load();


        window.addEventListener('scroll', function () {
            head(1);
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

function changebanner(id) {
    if (id == 1) {
        $('.index-fourth-banner-arrows-icon').animate({marginLeft: "334px"}, 250);
        $("#index-fourth-banner-ul").animate({marginLeft: "0px"}, {queue: false, duration: 500})
    } else if (id == 2) {
        $('.index-fourth-banner-arrows-icon').animate({marginLeft: "501px"}, 250);
        $("#index-fourth-banner-ul").animate({marginLeft: "-1124px"}, {queue: false, duration: 500})
    } else if (id == 3) {
        $('.index-fourth-banner-arrows-icon').animate({marginLeft: "687px"}, 250);
        $("#index-fourth-banner-ul").animate({marginLeft: "-2248px"}, {queue: false, duration: 500})

    }
}

function load() {
    head(1);

    var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
    var wTop = $(window).height();//浏览器可视高度
    var eTop = 0;
    eTop = $('.index-second-title').offset().top;//容器距离整个页面顶部的距离
    if (dTop + wTop - ($('.index-second-title').height() * 0.25) - 280 > eTop) {
        $('.index-second-title').animate({opacity: 1}, 500);
    }
    eTop = $('.index-second-banner').offset().top;
    if (dTop + wTop - ($('.index-second-banner').height() * 0.25) - 280 > eTop) {
        $('.index-second-banner').animate({opacity: 1}, 500);
        $('.index-second-banner-content-img-left-float').animate({opacity: 1}, 500);
        $('.index-second-banner-content-img-right-float').animate({opacity: 1}, 500);
    }

    eTop = $('.index-third-title').offset().top;//容器距离整个页面顶部的距离
    if (dTop + wTop - ($('.index-third-title').height() * 0.25) - 150 > eTop) {
        $('.index-third-title').animate({opacity: 1}, 500);
    }
    eTop = $('.index-third-content-list').offset().top;
    if (dTop + wTop - ($('.index-third-content-list').height() * 0.25)  > eTop) {
        $('.index-third-content-list').animate({opacity: 1}, 500);
    }
    eTop = $('.index-fourth-title').offset().top;//容器距离整个页面顶部的距离
    if (dTop + wTop - ($('.index-fourth-title').height() * 0.25) - 100 > eTop) {
        $('.index-fourth-title').animate({opacity: 1}, 500);
    }
    eTop = $('.index-fourth-banner').offset().top;
    if (dTop + wTop - ($('.index-fourth-banner').height() * 0.25) - 100 > eTop) {
        $('.index-fourth-banner').animate({opacity: 1}, 500);
    }
    eTop = $('.index-fourth-banner-tab').offset().top;
    if (dTop + wTop - ($('.index-fourth-banner-tab').height() * 0.25) - 100 > eTop) {
        $('.index-fourth-banner-tab').animate({opacity: 1}, 500);
    }
    eTop = $('.index-fourth-banner ul').offset().top;
    if (dTop + wTop - ($('.index-fourth-banner ul').height() * 0.25) - 100 > eTop) {
        $('.index-fourth-banner ul').animate({opacity: 1}, 500);
    }
    eTop = $('.index-fourth-dome').offset().top;
    if (dTop + wTop - ($('.index-fourth-dome').height() * 0.25) - 80 > eTop) {
        $('.index-fourth-dome').animate({opacity: 1}, 500);
    }

    eTop = $('.index-fifth-title').offset().top;//容器距离整个页面顶部的距离
    if (dTop + wTop - ($('.index-fifth-title').height() * 0.25) - 100 > eTop) {
        $('.index-fifth-title').animate({opacity: 1}, 500);
    }
    eTop = $('.index-fifth-banner').offset().top;
    if (dTop + wTop - ($('.index-fifth-banner').height() * 0.25) - 50 > eTop) {
        $('.index-fifth-banner').animate({opacity: 1}, 500);
    }
}
