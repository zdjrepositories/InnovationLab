function dispose(){
    $(".demo-button-text-dispose").html("<img class='await-ing' src='images/circle.png'>&nbsp;&nbsp;正在诊断");
    setTimeout("disposeing()",2500);
}
function analyze(){
    $(".demo-button-text-analyze").html("<img class='await-ing' src='images/circle.png'>&nbsp;&nbsp;正在分析");
    setTimeout("analyzeing()",1200);
}
function disposeing(){
    var obj = document.getElementsByName('point');
    var demand = '';
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            demand += obj[i].value + ',';//如果选中，将value添加到变量s中
        }
    }
    $(".demo-analyze").html("<div class=\"demo-title\">可用诊断算法</div>\n" +"<p>FAU热水阀开关状态报错</p>\n" +
        "<p>FAU风流开关/风机状态均报错</p>\n" +
        "<p>FAU有冷凝结露风险</p>\n" +
        "<p>FAU送风机命令与状态不一致</p>\n" +
        "<p>FAU水阀开关状态报错</p>\n" +
        "<p>FAU送风温度达不到设定值，制热送风温度设定值过高</p>\n" +
        "<p>室内CO2浓度报警</p>\n" +
        "<p>FAU风流开关状态报错</p>\n" +
        "<p>FAU送风温度达不到设定值，制冷送风温度设定值过低</p>\n" +
        "<p>FAU冷水阀开关状态报错</p>\n" +
        "<p>新风量过大</p>\n" +
        "<p>FAU送风阀开关状态报错</p>\n" +
        "<p>FAU新风自然冷却</p>\n" +
        "<p>FAU新风阀开关状态报错</p>\n" +
        "<p>FAU同时制冷制热</p>"+
    "        <a href=\"demo1_result.html\" onclick=\"analyze()\" class=\"demo-button\"><div class=\"demo-button-text demo-button-text-analyze\">智能分析</div></a>");
        $(".demo-button-text-dispose").text("智能诊断");
}
function analyzeing(){
    $(".demo-button-text-analyze").text("智能分析");
}