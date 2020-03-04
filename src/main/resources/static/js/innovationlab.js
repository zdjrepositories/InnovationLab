
function index_like(id) {
   $(".index-fourth-content-like-img" + id).css("opacity", "0");
    $(".index-fourth-content-like-img-on" + id).css("opacity", "1");
   $(".demo-like-sum" + id).css("color", "#3dcd58");
    var sum = parseInt($(".demo-like-sum"+ id).text());
    $(".demo-like-sum" + id).text(sum + 1);
    $(".index-fourth-content-like-img" + id).attr('onclick', '');
    $(".index-fourth-content-like-img-on" + id).addClass('like');
    giveLike(id);
}

function like(id) {
    $(".demo-like-img" + id).css("opacity", "0");
    $(".demo-like-img" + id + "-on").css("opacity", "1");
    $(".demo-like-img" + id + "-on").addClass('like-on');
    $(".demo-like-sum" + id).css("color", "#3dcd58");
    var sum = parseInt($(".demo-like-sum" + id).text());
    $(".demo-like-sum" + id).text(sum + 1);
    $(".demo-like-img" + id).attr('onclick', '');
    giveLike(id)
}

function giveLike(id) {
    $.ajax({
        url: '/innovationlab/giveLike?id=' + id,
        type: 'get',
        async: false,
        data: {},
        success: function () {
        }
    })
}

function getLike() {
    $.ajax({
        url: '/innovationlab/showLike',
        type: 'get',
        async: false,
        data: {},
        success: function (data) {
            $(".demo-like-sum1").text(data.demo1);
            $(".demo-like-sum2").text(data.demo2);
            $(".demo-like-sum3").text(data.demo3);
            $(".demo-like-sum4").text(data.demo4);
            $(".demo-like-sum5").text(data.demo5);
            $(".demo-like-sum6").text(data.demo6);
            $(".demo-like-sum7").text(data.demo7);
            $(".demo-like-sum8").text(data.demo8);
        }
    })
}
function getVisit() {
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        url: '/innovationlab/giveVisit',
        type: 'get',
        async: false,
        success: function (data) {
            visit=data;
            $("#visit").text(data);
        }
    })
}

function head(page) {
    var head_hight = $(document.documentElement).scrollTop() + $(document.body).scrollTop();  // 目前监听的是整个body的滚动条距离
    $('.head-list>li:nth-child(' + page + ')>a').css("font-weight", "520");
    if (head_hight > 30) {
        $(".head-nav>ul>li>a").css("border-color", "#fff");
        $('.head-list>li:nth-child(' + page + ')>a').css("color", "#fff");
        $('.head').addClass("head-active");
    } else if (head_hight < 30) {
        $(".head-nav>ul>li>a").css("border-color", "#3dcd58");
        $('.head-list>li:nth-child(' + page + ')>a').css("color", "#3dcd58");
        $('.head').removeClass("head-active");
    }
}

function getUser(page) {
    $.ajax({
        url: '/innovationlab/getUser',
        type: 'get',
        async: true,
        data: {},
        success: function (data) {
            var user=data;
            if(user!=""){
               var text=" <a href='javascript:;'  onclick=exitUser('"+page+"')><div class='head-photo'><div class='head-photo-text'>" + user.substring(0, 1) + "</div> </div>退出登录</a>"
                $(".head-login").html(text);

                }
        }
    })
}
function exitUser(page) {
var result = confirm('确认退出登录？');
    if(result){
       $.ajax({
         url: '/innovationlab/exitUser',
              type: 'get',
              async: false,
              data: {},
              success: function (data) {

                      $(".head-login").html("<a href='login.html?page=" + page + "><img class='head-login' src='images/head_white.png'/> 用户登录</a>");
                      window.location.href = page + ".html";
                  }
          })
    }else{
    }

}
function getDemo(page,demo) {
    $.ajax({
        url: '/innovationlab/getDemo?demo='+demo,
        type: 'get',
        async: true,
        data: {},
        success: function (data) {
         if(data!=""){
            window.open(data);
         }else{
            window.location.href = 'login.html?page='+page+'&demo='+demo;
         }
        }
    })
}
function demo_menu() {//导航栏动画
    $(".head-nav-demo").hover(function () {
        $(".head-nav-demo-list").slideDown(400);
    }, function () {
        $(".head-nav-demo-list").slideUp(400);
    });
    $(".head-nav-demo-list li").hover(function () {
        $(".head-nav-demo-list>li:hover").css("background-color", "#f0fff0");
        $(".head-nav-demo-list>li:hover>a").css("color", "#3dcd58");
    }, function () {
        $(".head-nav-demo-list>li").css("background-color", "#fff");
        $(".head-nav-demo-list>li>a").css("color", "#666");
    });
}
$(".head-nav-demo-list>li").click(function () {
}, function () {
    $(".head-nav-demo-list").slideUp(200);
}, true)
