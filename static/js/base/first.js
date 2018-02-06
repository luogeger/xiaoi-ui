console.log('xiaoi');
//  页面加载
function loadMainPage(ele, url, data, callback) {
    $(ele).load(url, data, function (){
        $(ele).css({"min-height": $(window).height()-60 +"px"});

        callback ? callback() : (function () {})();
    });

}

