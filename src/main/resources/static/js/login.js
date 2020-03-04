function login() {
    if ($('#email').val() == "") {
        $("input[name=email]").css("border-bottom-color", "#ff4d4d");
        $(".login-input-mail-error").text("请输入邮箱");
        $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else if ($('#email').val().indexOf("@se.com") < 0 && $('#email').val().indexOf("@non.se.com") < 0) {
        $("input[name=email]").css("border-bottom-color", "#ff4d4d");
        $(".login-input-mail-error").text("邮箱格式错误")
        $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else if ($('#password').val() == "") {
        $("input[name=password]").css("border-bottom-color", "#ff4d4d");
        $(".login-input-password-error").text("请输入密码")
        $(".login-input-password-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else if ($('#code').val() == "") {
        $("input[name=code]").css("border-bottom-color", "#ff4d4d");
        $(".login-input-code-error").text("请输入验证码")
        $(".login-input-code-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else if ($('#code').val() != sum) {
        $("input[name=code]").css("border-bottom-color", "#ff4d4d");
        $(".login-input-code-error").text("验证码错误")
        $(".login-input-code-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else {
        $(".login-button").html("<img class='await-ing' src='images/circle.png'>&nbsp;&nbsp;&nbsp;正在登录...");
        $(".login-button").css("background-color", "#64d975");
        $.post("/innovationlab/login", {"email": $('#email').val(), "password": $('#password').val()}, function (data) {
            if (data == "1") {
                $(".login-button").html("<img src=\"images/true.png\">&nbsp;&nbsp;&nbsp;登录成功");
                if (GetQueryString("demo") != "") {
                    getDemo(GetQueryString("page"), GetQueryString("demo"));
                }
                var page;
                if (GetQueryString("page") == "index") {
                    page = GetQueryString("page") + ".html#index-fourth"
                } else {
                    page = GetQueryString("page") + ".html#demo" + GetQueryString("demo");
                }
                window.location.href = page;
            } else {
                $(".login-input-password-error").text("邮箱或密码错误");
                $(".login-input-password-error").css("opacity", 1);
                $(".login-banner button").text("登录");
            }
        })
    }
}


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

function pwd() {
    $(".login-pwd-no").css("opacity", 1);
    $(".login-pwd").css("opacity", 0); //点击登录后显示loading，隐藏输入框
    $("#password").attr("type", "text");
}

function pwdno() {
    $(".login-pwd-no").css("opacity", 0);
    $(".login-pwd").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    $("#password").attr("type", "password");
}

var sum;
$(function () {
    code();
    $("input").change(function () {
        login_load();
    })
    if ($("input[name=email]").val() != "") {
                 $(".login-input-mail").css("color", "#3dcd58");
                       $(".login-input-mail").css("top", "45px");
                       $(".login-input-mail").css("font-size", "12px");
                       $(".login-input-mail-error").css("opacity", 0);
                       $("input[name=email]").css("border-bottom-color", "#d9d9d9");
            }
      if($("input[name=password]").val() != "")  {
                  $("#lns").hide();
                  $(".login-input-password").css("color", "#3dcd58");
                  $(".login-input-password").css("top", "125px");
                  $(".login-input-password").css("font-size", "12px");
                  $(".login-input-password-error").css("opacity", 0);
                  $("input[name=password]").css("border-bottom-color", "#d9d9d9");

     }
    $("#email").focus(function () {
        $(".login-input-mail").css("color", "#3dcd58");
        $(".login-input-mail").css("top", "45px");
        $(".login-input-mail").css("font-size", "12px");
        $(".login-input-mail-error").css("opacity", 0);
        $("input[name=email]").css("border-bottom-color", "#d9d9d9");
    });
    $("#email").blur(function () {
        if ($("input[name=email]").val() == "") {
            $(".login-input-mail").css("color", "#999");
            $(".login-input-mail").css("top", "66px");
            $(".login-input-mail").css("font-size", "16px");
        }
        if ($('#email').val() == "") {
            $("input[name=email]").css("border-bottom-color", "#ff4d4d");
            $(".login-input-mail-error").text("请输入邮箱");
            $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
        } else if ($('#email').val().indexOf("@se.com") < 0 && $('#email').val().indexOf("@non.se.com") < 0) {
            $("input[name=email]").css("border-bottom-color", "#ff4d4d");
            $(".login-input-mail-error").text("邮箱格式错误")
            $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
        }
    });
    $("#password").focus(function () {
        $("#lns").hide();
        $(".login-input-password").css("color", "#3dcd58");
        $(".login-input-password").css("top", "125px");
        $(".login-input-password").css("font-size", "12px");
        $(".login-input-password-error").css("opacity", 0);
        $("input[name=password]").css("border-bottom-color", "#d9d9d9");

    });
    $("#password").blur(function () {
        if ($("input[name=password]").val() == "") {
            $(".login-input-password").css("color", "#999");
            $(".login-input-password").css("top", "146px");
            $(".login-input-password").css("font-size", "16px");
        }
        if ($('#password').val() == "") {
            $("input[name=password]").css("border-bottom-color", "#ff4d4d");
            $(".login-input-password-error").text("请输入密码")
            $(".login-input-password-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
        }
    });
    $("#code").focus(function () {
        $("#lns").hide();
        $(".login-input-code").css("color", "#3dcd58");
        $(".login-input-code").css("top", "205px");
        $(".login-input-code").css("font-size", "12px");
        $(".login-input-code-error").css("opacity", 0);
        $("input[name=code]").css("border-bottom-color", "#d9d9d9");

    });
    $("#code").blur(function () {
        if ($("input[name=code]").val() == "") {
            $(".login-input-code").css("color", "#999");
            $(".login-input-code").css("top", "226px");
            $(".login-input-code").css("font-size", "16px");
        }
        if ($('#code').val() == "") {
            $("input[name=code]").css("border-bottom-color", "#ff4d4d");
            $(".login-input-code-error").text("请输入验证码")
            $(".login-input-code-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
        } else if ($('#code').val() != sum) {
            $("input[name=code]").css("border-bottom-color", "#ff4d4d");
            $(".login-input-code-error").text("验证码错误")
            $(".login-input-code-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
        }
    });
    var mail = new Array("@se.com", "@non.se.com");
    $("input[name=email]").keyup(function () {
        var text = "";
        var type = 0;
        if ($("input[name=email]").val().indexOf("@") > -1) {
            if ($("input[name=email]").val().substring($("input[name=email]").val().indexOf("@"), $("input[name=email]").val().length) == mail[0].substring(0, $("input[name=email]").val().length - $("input[name=email]").val().indexOf("@"))) {
                text = "<a href='javascript:;' onclick='changeMail(1)' class='lns1'>" + $("input[name=email]").val().substring(0, $("input[name=email]").val().indexOf("@")) + mail[0] + "</a>"
                type = type + 1;
                console.log("1:" + $("input[name=email]").val().substring($("input[name=email]").val().indexOf("@")));
            }
        }
        if ($("input[name=email]").val().indexOf("@") > -1) {
            if ($("input[name=email]").val().substring($("input[name=email]").val().indexOf("@"), $("input[name=email]").val().length) == mail[1].substring(0, $("input[name=email]").val().length - $("input[name=email]").val().indexOf("@"))) {
                type = type + 1;
                text = text + "<a href='javascript:;' onclick='changeMail(2)' class='lns2'>" + $("input[name=email]").val().substring(0, $("input[name=email]").val().indexOf("@")) + mail[1] + "</a>"
            }
        }
        if (type == 1) {
            $("#lns").html(text);
            $("#lns").show();
            $("#lns").css("height", "20px");
        } else if (type == 2) {
            $("#lns").html(text);
            $("#lns").show();
            $("#lns").css("height", "40px");
        } else {
            $("#lns").hide();
        }

    })
})

// function input_load() {
//
// }
//
// function email_load() {
//     if ($("input[name=email]").val() == "") {
//         $(".login-input-mail").css("color", "#999");
//         $(".login-input-mail").css("top", "66px");
//         $(".login-input-mail").css("font-size", "16px");
//     } else {
//         $(".login-input-code").css("color", "#3dcd58");
//         $(".login-input-code").css("top", "205px");
//         $(".login-input-code").css("font-size", "12px");
//         $(".login-input-code-error").css("opacity", 0);
//         $("input[name=code]").css("border-bottom-color", "#d9d9d9");
//
//         if ($('#email').val().indexOf("@se.com") < 0 && $('#email').val().indexOf("@non.se.com") < 0) {
//             $("input[name=email]").css("border-bottom-color", "#ff4d4d");
//             $(".login-input-mail-error").text("邮箱格式错误")
//             $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
//         }
//     }
// }
function password_load() {
    if ($("input[name=password]").val() == "") {
        $(".login-input-password").css("color", "#999");
        $(".login-input-password").css("top", "146px");
        $(".login-input-password").css("font-size", "16px");
    }else{

    }
}

function login_load() {
    if ($("input[name=email]").val() == "") {
        $(".login-input-mail").css("color", "#999");
        $(".login-input-mail").css("top", "66px");
        $(".login-input-mail").css("font-size", "16px");
    } else {
        $(".login-input-mail").css("color", "#3dcd58");
        $(".login-input-mail").css("top", "45px");
        $(".login-input-mail").css("font-size", "12px");
        $(".login-input-mail-error").css("opacity", 0);
        $("input[name=email]").css("border-bottom-color", "#d9d9d9");
    }
    if ($("input[name=password]").val() == "") {
        $(".login-input-password").css("color", "#999");
        $(".login-input-password").css("top", "146px");
        $(".login-input-password").css("font-size", "16px");
    } else {
        $(".login-input-password").css("color", "#3dcd58");
        $(".login-input-password").css("top", "125px");
        $(".login-input-password").css("font-size", "12px");
        $(".login-input-password-error").css("opacity", 0);
        $("input[name=password]").css("border-bottom-color", "#d9d9d9");
    }
    if ($("input[name=code]").val() == "") {
        $(".login-input-code").css("color", "#999");
        $(".login-input-code").css("top", "226px");
        $(".login-input-code").css("font-size", "16px");
    } else {
        $(".login-input-code").css("color", "#3dcd58");
        $(".login-input-code").css("top", "205px");
        $(".login-input-code").css("font-size", "12px");
        $(".login-input-code-error").css("opacity", 0);
        $("input[name=code]").css("border-bottom-color", "#d9d9d9");
    }
}








function changeMail(num) {
    var c = $(".lns" + num).text();
    $("input[name=email]").val(c);
    $("#lns").hide();
    login_load();
}

function code() {
    var numa = Math.floor(Math.random() * 11);
    var numb = Math.floor(Math.random() * 11);
    var x = Math.floor(Math.random() * 2);
    var char;
    if (x == 0) {
        char = '+';
        sum = numa + numb;
    } else {
        char = '-';
        sum = numa - numb;
    }
    $(".login-code-text").text(numa + char + numb + "=?");
}


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

function pwd() {
    $(".login-pwd-no").css("opacity", 1);
    $(".login-pwd").css("opacity", 0); //点击登录后显示loading，隐藏输入框
    $("#password").attr("type", "text");
}

function pwdno() {
    $(".login-pwd-no").css("opacity", 0);
    $(".login-pwd").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    $("#password").attr("type", "password");
}

