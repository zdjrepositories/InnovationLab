$(function () { getUser('demo');
        demo_menu();
        demofirst();
        load();
        demosidenav();
        getLike();
        getVisit();

        function load() {
            head(2);
            var dTop = $(document).scrollTop();//可视区域到页面顶部的距离
            var wTop = $(window).height();//浏览器可视高度
            var demo = $("#demo1").offset().top;//浏览器可视高度
            var eTop = $('.demo-content-banner-demo1').offset().top;//容器距离整个页面顶部的距离
            var t;
            for (t = 1; t < (dTop +50) / 700 + 1; t++) {
                demo_load(t);
            }
            nav_anchor(t - 1);
        }

        //侧边栏
        function demosidenav() {
            $(".demo-side-nav").click(function () {
            }, function () {
                $('.demo-side-nav-img').toggle();
                $('.demo-side-nav-close').toggle();
                $('.demo-side-nav-list').toggle(300)
            }, true)
        }


        window.addEventListener('scroll', function () {
            load();
        })

        function nav_anchor(demo) {
            $(".demo-side-nav-list a").css("color", "#666666");
            $(".demo-side-nav-table tr:nth-child(" + demo + ") a").css("color", "#3dcd58");
            $(".demo-side-nav-anchor").remove();
            $(".demo-side-nav-table tr:nth-child(" + demo + ") td:first-child").append("<div class=\"demo-side-nav-anchor\"></div>");
        }

        function demo_load(demo) {
            if (demo % 2 == 1) {
                $('.demo-content-banner-demo' + demo).delay(100).animate({
                    marginLeft: '512px',
                    opacity: 1
                }, 850, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-line").delay(100).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-title").delay(150).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-explain").delay(200).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-tags").delay(250).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value").delay(300).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(1)").delay(350).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(2)").delay(400).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(3)").delay(450).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function").delay(500).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(1)").delay(550).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(2)").delay(600).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(3)").delay(650).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(4)").delay(700).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-link").delay(200).animate({opacity: 1}, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-like").delay(200).animate({opacity: 1}, 650, 'easeOutCirc');
            } else {
                $('.demo-content-banner-demo' + demo).delay(100).animate({left: '-261px', opacity: 1}, 850, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-line").delay(100).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-title").delay(150).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-explain").delay(200).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-tags").delay(250).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value").delay(300).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(1)").delay(350).animate({
                    marginLeft: '0px',
                    opacity: 1

                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(2)").delay(400).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-value-content li:nth-child(3)").delay(450).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function").delay(500).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(1)").delay(550).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(2)").delay(600).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(3)").delay(650).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-function-content li:nth-child(4)").delay(700).animate({
                    marginLeft: '0px',
                    opacity: 1
                }, 650, 'easeOutCirc');
                $(".demo-content-text-demo" + demo + ">.demo-banner-link").delay(200).animate({opacity: 1}, 650, 'easeOutCirc');

                $(".demo-content-text-demo" + demo + ">.demo-like").delay(200).animate({opacity: 1}, 650, 'easeOutCirc');
            }
        }

        function demofirst() {
            $('.demo-first-title').delay(300).animate({opacity: 1}, 3000, 'easeOutCirc');
            setTimeout(function () {
                demo_load(1);
            }, 800);
        }
    }
)
