// -- 如果有锚链接， 侧边导航的位置
if (location.hash !== '') {
    $('.slimScrollDiv').css({'position': 'fixed', 'top': top})
    $('.info-sidle').css('top', '20px')
}


// -- 代码语法高亮
hljs.initHighlightingOnLoad();
$(document).ready(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});
addPrefix();// icon 前缀


// -- info-sidle 获取高度、定位
var winHeight = $(window).height() -80 +'px';
$('.info-sidle').css('height', winHeight).slimScroll({
    width: '240px',
    height: winHeight,
})
$(document).scroll(function () {
    var topHeight = $(this).scrollTop();
    // 定位
    var top = 240 -topHeight;
    top < 20 ? scrollDiv(-1) : scrollDiv(1);
    function scrollDiv (flag) {
        if (flag < 0) {
            top = 20 +'px';
            $('.slimScrollDiv').css({'position': 'fixed', 'top': top})
        }
        else {
            top = top +'px';
            $('.slimScrollDiv').css({'position': 'relative', 'top': 0})
        }


        $('.info-sidle').css('top', top)
    };

})// document


// -- 左边 点击的样式
var $sidle_lis = $('.info-sidle ul li');// 所有 li 标签
setTimeout(function () {
    $sidle_lis.each(function (index, item) {
        $(item).click(function () {
            var _this = $(this)
            if (_this.hasClass('li-border')) {
                var a = _this.attr('class')
                var b = a.substring(0, a.length -10)
                var _top = $('#' + b)[0].offsetTop;
                $(document).scrollTop(_top)
                return
            }


            var id = _this.attr('class');
            var top = $('#' + id)[0].offsetTop;
            $sidle_lis.each(function (i, v){ $(v).removeClass('li-border') })// 排他
            _this.addClass('li-border')
            //$(document).scrollTop(top)
        })

    })

}, 100)// setTimeout


// -- 滚动页面 和 左边样式对应
var navArr = [];
var navFlag = true;
$(document).scroll(function () {
    var scrollDistance = $(document).scrollTop();
    if (navFlag) {
        $('.info-content>div').each(function (index, item) {
            navArr[index] = {
                id: $(item).attr('id'),
                top: item.offsetTop,
                height: $(item).height(),
                bottom: item.offsetTop +$(item).height(),
            }
        });
        navFlag = false;
    }// if

    navArr.forEach(function (p1, p2, p3) {
        if (scrollDistance > p1.top && scrollDistance < p1.bottom) {
            $sidle_lis.each(function (i, v){ $(v).removeClass('li-border') });// 排他
            $('.' +p1.id).addClass('li-border');
        }
    })
})// document


// -- 返回顶部，取消左边导航选中样式
$('#backtop').click(function () {
    $sidle_lis.each(function (i, v){ $(v).removeClass('li-border') })// 排他
    $(document).scrollTop(0)
})


// -- 所有icon图标
var iconData = [
    ['icon-download-b', ''],
    ['icon-upload-b', ''],
    ['icon-check', ''],
    ['icon-fold-open-fill', ''],
    ['icon-fold-close-fill', ''],
    ['icon-spread', ''],
    ['icon-check-square', ''],
    ['icon-min-square', ''],

    ['icon-circle', ''],
    ['icon-plus-square', ''],
    ['icon-contract', ''],
    ['icon-close-square', ''],
    ['icon-point', ''],
    ['icon-check-a', ''],
    ['icon-check-empty', ''],
    ['icon-circle-empty', ''],

    ['icon-cale-a', ''],
    ['icon-download-file', ''],
    ['icon-mic', ''],
    ['icon-mic-quiet', ''],
    ['icon-fold-open-line', ''],
    ['icon-fold-open-line', ''],
    ['icon-remind', ''],
    ['icon-voice', ''],

    ['icon-data-search', ''],
    ['icon-help', ''],
    ['icon-data-wait', ''],
    ['icon-explain', ''],
    ['icon-data-nopass', ''],
    ['icon-data-pass', ''],
    ['icon-link', ''],
    ['icon-chart', ''],

    ['icon-gold', ''],
    ['icon-paste', ''],
    ['icon-align-left', ''],
    ['icon-align-middle', ''],
    ['icon-align-right', ''],
    ['icon-data', ''],
    ['icon-keynote', ''],
    ['icon-open-up', ''],

    ['icon-pack-up', ''],
    ['icon-admin', ''],
    ['icon-download-cloud', ''],
    ['icon-upload-cloud', ''],
    ['icon-customer', ''],
    ['icon-money-rmb', ''],
    ['icon-ranking', ''],
    ['icon-time', ''],

    ['icon-history', ''],
    ['icon-edu', ''],
    ['icon-file', ''],
    ['icon-fold-close-line', ''],
    ['icon-bag-work', ''],
    ['icon-arrow-dbLeft', ''],
    ['icon-arrow-dbRight', ''],
    ['icon-share', ''],

    ['icon-shopping-cart', ''],
    ['icon-exit', ''],
    ['icon-check-fill', ''],
    ['icon-check-line', ''],
    ['icon-min', ''],
    ['icon-plus', ''],
    ['icon-tel', ''],
    ['icon-key', ''],

    ['icon-power', ''],
    ['icon-close', ''],
    ['icon-unlock', ''],
    ['icon-edit', ''],
    ['icon-location-line', ''],
    ['icon-location-fill', ''],
    ['icon-home-line', ''],
    ['icon-home-fill', ''],

    ['icon-collect-fill', ''],
    ['icon-eva-good', ''],
    ['icon-eva-bad', ''],
    ['icon-comment', ''],
    ['icon-send', ''],
    ['icon-phone', ''],
    ['icon-setting', ''],
    ['icon-delete', ''],

    ['icon-book', ''],
    ['icon-heart', ''],
    ['icon-camera', ''],
    ['icon-locking', ''],
    ['icon-collect', ''],
    ['icon-show', ''],
    ['icon-user', ''],
    ['icon-copy', ''],

    ['icon-earth', ''],
    ['icon-pen', ''],
    ['icon-message', ''],
    ['icon-map', ''],
    ['icon-laud', ''],
    ['icon-search', ''],
    ['icon-people', ''],
    ['icon-album', ''],

    ['icon-refresh', ''],
    ['icon-list', ''],
    ['icon-people-group', ''],
    ['icon-arrow-left', ''],
    ['icon-arrow-down', ''],
    ['icon-arrow-right', ''],
    ['icon-arrow-up', ''],
    ['icon-workpermit', ''],

    ['icon-position', ''],
    ['icon-voice-quiet', ''],
    ['icon-right', ''],
    ['icon-card', ''],
    ['icon-close-line', ''],
    ['icon-close-fill', ''],
    ['icon-top', ''],
    ['icon-tag', ''],

    ['icon-annex', ''],
    ['icon-truck', ''],
    ['icon-nav', ''],
    ['icon-upload-file', ''],

];
var iconArr = [];
iconData.forEach(function (item, index){
    var str ='';
    str = '<li><i class="'+ item[0] +'"></i><span><p>'+ item[1] +'</p><h6>'+ item[0] +'</h6></span></li>'
    iconArr.push(str)
})
$('#iconPic ul').html('').html(iconArr.join(''))
addPrefix();// -- icon 添加前缀


// == 模态窗口
$('#modelDomBtn').click(function () {
    function confirm() {
        toastr.success('confirm')
    };

    function cancel() {
        toastr.error('cancel')
    };

    var modalObj = {
        title: '上传',
        content: '这里可以是页面上一个dom元素',
        method: {confirm: confirm, cancel: cancel}
    };
    xiaoi.modal(modalObj)

})


// == 侧滑
$('#sidleBtn').click(function () {
    var obj = {
        title: '文档对比',
        content: '#sidlePage'
    };
    xiaoi.side.right(obj)// 侧滑
})

// == Paging
	$(".i-page-line").each(function (index, item) {
        $(item).Paging({
            pageNo: 4,
            totalPage: 13,
            totalSize: 300,
            callback: function(num) {
                console.log(num)
            }
        });
    })

// == slide
    var slideData = [
        {title: "title-1", src: "static/images/b1.jpg", href: "navigate.html"},
        {title: "title-2", src: "static/images/b2.jpg", href: "navigate.html"},
        {title: "title-3", src: "static/images/b3.jpg", href: "navigate.html"},
        {title: "title-4", src: "static/images/b4.jpg", href: "navigate.html"},
        {title: "title-5", src: "static/images/b5.jpg", href: "navigate.html"},
        {title: "title-6", src: "static/images/b6.jpg", href: "navigate.html"}
    ];
    $('#focus, #app').each(function (index, item) {
        $(item).Slide({
            data: slideData,
            width: '730px',
            height: '454px',
            // isAuto: true,
        })
    })
