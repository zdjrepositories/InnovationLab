
$(function () {
    $("select").bind("change",function(){
        if($(this).val()=="1"){
            $(".demo-left img").attr('src',"images/1.jpg");
            $(".demo-right-text").html("<p>额定耐受冲击电压: Uimp 12kV</p>\n" +
                "<p>额定电压1: 220/440~</p>\n" +
                "<p>额定电压2: 480/690~</p>\n" +
                "<p>额定电压1: 220/440~</p>\n" +
                "<p>分断等级: N2</p>\n" +
                "<p>符合标准2: EC60947-2</p>\n" +
                "<p>断路器本体: MT08</p>\n" +
                "<p>额定绝缘电压: Ui 1000V</p>\n" +
                "<p>MT正面</p>")
        }else if($(this).val()=="2"){
            $(".demo-left img").attr('src',"images/2.jpg");
        }else if($(this).val()=="3"){
            $(".demo-left img").attr('src',"images/3.jpg");
        }
    });
});

function dispose(){
    $(".demo-button-text").html("<img class='await-ing' src='images/circle.png'>&nbsp;&nbsp;正在识别...");
    setTimeout("disposeimg()",1200);

}

function disposeimg(){
    if($("select option:selected").val()=="1"){
        $(".demo-right-text").html("" +
            "<p>额定耐受冲击电压: Uimp 12kV</p>" +
            "<p>额定电压1: 220/440~</p><p>额定电压2: 480/690~</p>" +
            "<p>分断等级: N2</p>" +
            "<p>符合标准2: EC60947-2</p> " +
            "<p>符合标准1: GB/T14048.2</p>" +
            "<p>断路器本体: MT08</p>" +
            "<p>额定绝缘电压: Ui 1000V</p>" +
            "<p>MT正面</p>"
        )
    }else if($("select option:selected").val()=="2"){
        $(".demo-right-text").html("" +
            "<p>额定耐受冲击电压: Uimp 12kV</p>\n" +
            "<p>额定电压1: 220/440~</p>\n" +
            "<p>额定电压2: 480/690~</p>\n" +
            "<p>分断等级: N1</p>\n" +
            "<p>符合标准2: EC60947-2</p>\n" +
            "<p>符合标准1: GB14048.2</p>\n" +
            "<p>断路器本体: MT06</p>\n" +
            "<p>额定绝缘电压: Ui 1000V</p>\n" +
            "<p>MT正面</p>")
    }else if($("select option:selected").val()=="3"){
        $(".demo-right-text").html("" +
            "<p>订单号: 002892200-00104/6</p>\n" +
            "<p>断路器极数: 3D</p>\n" +
            "<p>断路器本体和分断等级: MTO8N2</p>\n" +
            "<p>生产厂家和日期: HH193845426</p>\n" +
            "<p>MT侧面</p>")
    }
    $(".demo-button-text").text("点击识别");
}