$(function () {getUser('about');
        load();
        demo_menu();
        aboutfirst();
        getVisit();

        function load() {
            head(4);
            var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
            var wTop = $(window).height();//浏览器可视高度
            var eTop = $('.about-third-title').offset().top;//容器距离整个页面顶部的距离
            if (dTop + wTop - ($('.about-third-title').height() * 0.25) - 100 > eTop) {
                $('.about-third-title').animate({opacity:1},500).css({flter:"Alpha(Opacity=100)"});
            }
            eTop = $('.about-third-banner-table').offset().top;
            if (dTop + wTop - ($('.about-third-banner-table').height() * 0.25) - 100 > eTop) {
                $('.about-third-banner-table').animate({opacity: "1"},500);
            }
            eTop = $('.about-fourth-title').offset().top;
            if (dTop + wTop - ($('.about-fourth-title').height() * 0.25) - 150 > eTop) {
                $('.about-fourth-title').animate({opacity: 1},500);
            }
            eTop = $('.about-fourth-banner').offset().top;
            if (dTop + wTop - ($('.about-fourth-banner').height() * 0.25) - 100 > eTop) {
                $('.about-fourth-banner').animate({opacity: 1},500);
            }
        }

        function aboutfirst() {
            $('.about-first-banner-bg').animate({opacity: 1}, 500);
            $('.about-first-title').delay(150).animate({opacity: 1}, 500);
            $('.about-second-banner').delay(300).animate({opacity: 1}, 500);
            $('.about-second-content-left-img').delay(450).animate({opacity: 1}, 500);
            $('.about-second-content-right-title').delay(600).animate({opacity: 1}, 500);
            $('.about-second-content-right-title2').delay(750).animate({opacity: 1}, 500);
            $('.about-second-content-right-line').delay(900).animate({opacity: 1}, 500);
            $('.about-second-ul>li:nth-child(1)').animate({top: "211px"});
            $('.about-second-ul>li:nth-child(2)').animate({top: "253px"});
            $('.about-second-ul>li:nth-child(3)').animate({top: "295px"});
            $('.about-second-ul>li:nth-child(1)').delay(950).animate({opacity: 1, left: "630px"}, 200);
            $('.about-second-ul>li:nth-child(2)').delay(1050).animate({opacity: 1, left: "630px"}, 200);
            $('.about-second-ul>li:nth-child(3)').delay(1150).animate({opacity: 1, left: "630px"}, 200);
        }

        window.addEventListener('scroll', function () {
                load();
            }
        )
    }
)

