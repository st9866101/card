$(document).ready(function () {
    var aniTargetTop;
    var targetScrollTop, calculation;
    var bodyHeight;
    var animated = true;
    var setprop;
    console.log(aniTargetTop + ' ' + bodyHeight);
    function checkImg() {
        if (document.querySelectorAll('.mainbg')[0].complete) {
            bodyHeight = $('body').height();
            aniTargetTop = $('.games').offset().top;
        } else {
            setprop = setTimeout(checkImg, 1000);
        }
    }
    function testAnimate() {
        //scroll top值
        targetScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //scroll top - 遊戲區距離頂部的高
        calculation = aniTargetTop - targetScrollTop;
        //qr-code
        if (targetScrollTop < bodyHeight * 0.5) {
            $('.qr-code').animate({
                top: targetScrollTop + 200 + 'px'
            });
        } else {
            $('.qr-code').animate({
                top: bodyHeight - 900 + 'px'
            });
        }

        //遊戲區
        console.log(targetScrollTop + ' ' + calculation);
        if (calculation < 600 && animated) {
            animated = false;
            $('.block').addClass('animate');
        } else if (calculation > 600 && !animated) {
            animated = true;
            $('.block').removeClass('animate');
        }
    }

    $(window).scroll(_.throttle(testAnimate, 250));
    testAnimate();
    setInterval(checkImg,1000);
});