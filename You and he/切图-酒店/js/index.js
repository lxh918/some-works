// 鼠标滑轮向下滚动时隐藏顶部导航栏
var scrollFun = function (e) {
    e = e || window.event;
    // ie chrome
    if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
            $('.nav').show(1000);
        }
        if (e.wheelDelta < 0) {
            $('.nav').hide(1000);
        }
        // firefox
    } else if (e.detail) {
        if (e.detail > 0) {
            $('.nav').hide(1000);
        }
        if (e.detail < 0) {
            $('.nav').show(1000);
        }
    }
}
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFun, false);
}
window.onmousewheel = document.onmousewheel = scrollFun;

// 顶部轮播大图
function ChangeBg() {
    // console.log($('#slider_img').attr("src"))
    if ($('#slider_img').attr("src") == './images/header_play1.png') {
        $('#slider_img').attr("src", "./images/header_play2.png")
    } else {
        $('#slider_img').attr("src", "./images/header_play1.png")
    }
}
setInterval(ChangeBg, 4000);

//底部轮播小图
var count = 0;
function ChangeS() {
    var img = document.getElementsByClassName('small');
    for (var i = 0; i < img.length; i++) {
        var num = i + count;
        if (num > 5) {
            if (num % 6 == 0) {
                num = 0;
            } else {
                num = num % 6;
            }
        }
        // console.log(num)
        img[i].src = `./images/bottom_pic${num}.png`;
    }
    count++;

}
setInterval(ChangeS, 5000);