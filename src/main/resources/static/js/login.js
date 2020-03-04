function login() {
    $("#lns").hide();
    $(".login-error").css("opacity", 0);
    $("input").css("border-bottom-color", "#d9d9d9");
    if ($('#email').val() == "") {
        $("input[name=email]").css("border-bottom-color", "#ff4d4d");
        $(".login-input-mail-error").text("请输入您的邮箱");
        $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else if ($('#password').val() == "") {
        $("input[name=password]").css("border-bottom-color", "#ff4d4d");
        $(".login-input-password-error").text("请输入登录密码")
        $(".login-input-password-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else if ($('#code').val() == "") {
        $("input[name=code]").css("border-bottom-color", "#ff4d4d");
        $(".login-input-code-error").text("请输入验证码")
        $(".login-input-code-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else if ($('#email').val().indexOf("@se.com") < 0) {
        $("input[name=email]").css("border-bottom-color", "#ff4d4d");
        $(".login-input-mail-error").text("邮箱格式不正确")
        $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
    } else {
        $.post("/innovationlab/getEmail", {
                "email": $('#email').val()
            }, function (data) {
                console.log(data);
                if (data != "1") {
                    $("input[name=email]").css("border-bottom-color", "#ff4d4d");
                    $(".login-input-mail-error").text("您的邮箱尚未开通权限")
                    $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
                } else {
                    if ($('#code').val() != sum) {
                        $("input[name=code]").css("border-bottom-color", "#ff4d4d");
                        $(".login-input-code-error").text("验证码不正确")
                        $(".login-input-code-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
                    } else {
                        $(".login-button").html("<img class='await-ing' src='images/circle.png'>&nbsp;&nbsp;&nbsp;正在登录...");
                        $(".login-button").css("background-color", "#64d975");
                        $.post("/innovationlab/login", {
                            "email": $('#email').val(),
                            "password": $('#password').val()
                        }, function (data) {
                            if (data == "1") {
                                $(".login-button").html("<img class='succeed-img' src='images/true.png'>&nbsp;&nbsp;&nbsp;登录成功");
                                setTimeout("login_succeed()", 800);
                            } else {
                                $("input[name=password]").css("border-bottom-color", "#ff4d4d");
                                $(".login-input-password-error").text("登录密码不正确");
                                $(".login-input-password-error").css("opacity", 1);
                                $(".login-banner button").text("登录");
                            }
                        })
                    }

                }
            }
        )
    }
}

function login_succeed() {
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
   $('#login_botton').focus();

    $("input[name=email]").keydown(function () {
        text_up(1)
    });
    $("input[name=password]").keydown(function () {
        text_up(2)
    });
    $("input[name=code]").keydown(function () {
        text_up(3)
    });


    $("input[name=email]").focus(function () {
        text_up(1)
    });
    $("input[name=email]").blur(function () {
        if ($("input[name=email]").val() == "") {
            text_down(1);
        }
        if ($('#email').val() == "") {
            $("input[name=email]").css("border-bottom-color", "#ff4d4d");
            $(".login-input-mail-error").text("请输入您的邮箱");
            $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
        } else if ($('#email').val().indexOf("@se.com") < 0) {
            $("input[name=email]").css("border-bottom-color", "#ff4d4d");
            $(".login-input-mail-error").text("邮箱格式不正确");
            $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
        } else if ($('#email').val().indexOf("@se.com") > 0) {
            $.post("/innovationlab/getEmail", {
                    "email": $('#email').val()
                }, function (data) {
                    console.log(data);
                    if (data != "1") {
                        $("input[name=email]").css("border-bottom-color", "#ff4d4d");
                        $(".login-input-mail-error").text("您的邮箱尚未开通权限")
                        $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
                    }
                }
            )
        }

    });
    $("#password").focus(function () {
        $("#lns").hide();
        text_up(2)
    });
    $("#password").blur(function () {
        if ($("input[name=password]").val() == "") {
           text_down(2)
        }
        if ($('#password').val() == "") {
            $("input[name=password]").css("border-bottom-color", "#ff4d4d");
            $(".login-input-password-error").text("请输入登录密码")
            $(".login-input-password-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
        }
        if ($('#password').val() != "" && ($('#email').val().indexOf("@se.com") > 0 || $('#email').val().indexOf("@non.se.com") > 0)) {
            $.post("/innovationlab/login", {
                "email": $('#email').val(),
                "password": $('#password').val()
            }, function (data) {
                if (data != "1") {
                    $("input[name=password]").css("border-bottom-color", "#ff4d4d");
                    $(".login-input-password-error").text("登录密码不正确")
                    $(".login-input-password-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
                }
            })

        }
    });
    $("#code").focus(function () {
        $("#lns").hide();
       text_up(3)
    });
    $("#code").blur(function () {
        if ($("input[name=code]").val() == "") {
            text_down(3)
        }
        if ($('#code').val() == "") {
            $("input[name=code]").css("border-bottom-color", "#ff4d4d");
            $(".login-input-code-error").text("请输入验证码")
            $(".login-input-code-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
        } else if ($('#code').val() != sum) {
            $("input[name=code]").css("border-bottom-color", "#ff4d4d");
            $(".login-input-code-error").text("验证码不正确")
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
            }
        }
        // if ($("input[name=email]").val().indexOf("@") > -1) {
        //     if ($("input[name=email]").val().substring($("input[name=email]").val().indexOf("@"), $("input[name=email]").val().length) == mail[1].substring(0, $("input[name=email]").val().length - $("input[name=email]").val().indexOf("@"))) {
        //         type = type + 1;
        //         text = text + "<a href='javascript:;' onclick='changeMail(2)' class='lns2'>" + $("input[name=email]").val().substring(0, $("input[name=email]").val().indexOf("@")) + mail[1] + "</a>"
        //     }
        // }
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
function changeMail(num) {
    alert("sd");
    var c = $(".lns" + num).text();
    $("input[name=email]").val(c);
    $("#lns").hide();
    if ($('#email').val().indexOf("@se.com") > 0) {
        $.post("/innovationlab/getEmail", {
                "email": $('#email').val()
            }, function (data) {
                console.log(data);
                if (data != "1") {
                    $("input[name=email]").css("border-bottom-color", "#ff4d4d");
                    $(".login-input-mail-error").text("您的邮箱尚未开通权限")
                    $(".login-input-mail-error").css("opacity", 1); //点击登录后显示loading，隐藏输入框
                }
            }
        )
    }
}




function text_up(num) {
    if (num == 1) {
        $(".login-input-mail").css("color", "#3dcd58");
        $(".login-input-mail").css("top", "45px");
        $(".login-input-mail").css("font-size", "12px");
        $(".login-input-mail-error").css("opacity", 0);
        $("input[name=email]").css("border-bottom-color", "#d9d9d9");
    } else if (num == 2) {
        $(".login-input-password").css("color", "#3dcd58");
        $(".login-input-password").css("top", "125px");
        $(".login-input-password").css("font-size", "12px");
        $(".login-input-password-error").css("opacity", 0);
        $("input[name=password]").css("border-bottom-color", "#d9d9d9");
    } else if (num == 3) {
        $(".login-input-code").css("color", "#3dcd58");
        $(".login-input-code").css("top", "205px");
        $(".login-input-code").css("font-size", "12px");
        $(".login-input-code-error").css("opacity", 0);
        $("input[name=code]").css("border-bottom-color", "#d9d9d9");
    }
}
function text_down(num) {
    if (num == 1) {
        $(".login-input-mail").css("color", "#c0c0c0");
        $(".login-input-mail").css("top", "63px");
        $(".login-input-mail").css("font-size", "16px");
    } else if (num == 2) {
        $(".login-input-password").css("color", "#c0c0c0");
        $(".login-input-password").css("top", "143px");
        $(".login-input-password").css("font-size", "16px");
    } else if (num == 3) {
        $(".login-input-code").css("color", "#c0c0c0");
        $(".login-input-code").css("top", "223px");
        $(".login-input-code").css("font-size", "16px");
    }

}



function code() {
    $("#lns").hide();
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

