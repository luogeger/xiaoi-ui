console.log('xiaoi');


//  页面加载
function loadMainPage(ele, url, data, callback) {
    $(ele).load(url, data, function (){
        $(ele).css({"min-height": $(window).height()-60 +"px"});
        // if(callback !== undefined) {
        //     callback()
        // }

        callback ? callback() : (function () {})();
    });

}


//  滚动条
//  ==================================================
;(function (f) {
    jQuery.fn.extend({
        slimScroll: function (h) {
            var a = f.extend({
                width: "auto",
                height: "250px",
                size: "5px",
                color: "#000",
                position: "right",
                distance: "2px",
                start: "top",
                opacity: 0.4,
                alwaysVisible: !1,// 一直显示
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: 0.2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 10,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, h);
            this.each(function () {
                function r(d) {
                    if (s) {
                        d = d ||
                            window.event;
                        var c = 0;
                        d.wheelDelta && (c = -d.wheelDelta / 120);
                        d.detail && (c = d.detail / 3);
                        f(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && m(c, !0);
                        d.preventDefault && !k && d.preventDefault();
                        k || (d.returnValue = !1)
                    }
                }

                function m(d, f, h) {
                    k = !1;
                    var e = d, g = b.outerHeight(false) - c.outerHeight(false);
                    f && (e = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(false), e = Math.min(Math.max(e, 0), g), e = 0 < d ? Math.ceil(e) : Math.floor(e), c.css({top: e + "px"}));
                    l = parseInt(c.css("top")) / (b.outerHeight(false) - c.outerHeight(false));
                    e = l * (b[0].scrollHeight - b.outerHeight(false));
                    h && (e = d, d = e / b[0].scrollHeight * b.outerHeight(false), d = Math.min(Math.max(d, 0), g), c.css({top: d + "px"}));
                    b.scrollTop(e);
                    b.trigger("slimscrolling", ~~e);
                    v();
                    p()
                }

                function C() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", r, !1), this.addEventListener("mousewheel", r, !1), this.addEventListener("MozMousePixelScroll", r, !1)) : document.attachEvent("onmousewheel", r)
                }

                function w() {
                    u = Math.max(b.outerHeight(false) / b[0].scrollHeight * b.outerHeight(false), D);
                    c.css({height: u + "px"});
                    var a = u == b.outerHeight(false) ? "none" : "block";
                    c.css({display: a})
                }

                function v() {
                    w();
                    clearTimeout(A);
                    l == ~~l ? (k = a.allowPageScroll, B != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
                    B = l;
                    u >= b.outerHeight(false) ? k = !0 : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && g.stop(!0, !0).fadeIn("fast"))
                }

                function p() {
                    a.alwaysVisible || (A = setTimeout(function () {
                        a.disableFadeOut && s || (x || y) || (c.fadeOut("slow"), g.fadeOut("slow"))
                    }, 1E3))
                }

                var s, x, y, A, z, u, l, B, D = 30, k = !1, b = f(this);
                if (b.parent().hasClass(a.wrapperClass)) {
                    var n = b.scrollTop(),
                        c = b.parent().find("." + a.barClass), g = b.parent().find("." + a.railClass);
                    w();
                    if (f.isPlainObject(h)) {
                        if ("height" in h && "auto" == h.height) {
                            b.parent().css("height", "auto");
                            b.css("height", "auto");
                            var q = b.parent().parent().height();
                            b.parent().css("height", q);
                            b.css("height", q)
                        }
                        if ("scrollTo" in h) n = parseInt(a.scrollTo); else if ("scrollBy" in h) n += parseInt(a.scrollBy); else if ("destroy" in h) {
                            c.remove();
                            g.remove();
                            b.unwrap();
                            return
                        }
                        m(n, !1, !0)
                    }
                } else {
                    a.height = "auto" == a.height ? b.parent().height() : a.height;
                    n = f("<div></div>").addClass(a.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden", width: a.width, height: a.height
                    });
                    b.css({overflow: "hidden", width: a.width, height: a.height});
                    var g = f("<div></div>").addClass(a.railClass).css({
                        width: a.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: a.alwaysVisible && a.railVisible ? "block" : "none",
                        "border-radius": a.railBorderRadius,
                        background: a.railColor,
                        opacity: a.railOpacity,
                        zIndex: 90
                    }), c = f("<div></div>").addClass(a.barClass).css({
                        background: a.color,
                        width: a.size,
                        position: "absolute",
                        top: 0,
                        opacity: a.opacity,
                        display: a.alwaysVisible ?
                            "block" : "none",
                        "border-radius": a.borderRadius,
                        BorderRadius: a.borderRadius,
                        MozBorderRadius: a.borderRadius,
                        WebkitBorderRadius: a.borderRadius,
                        zIndex: 1
                    }), q = "right" == a.position ? {right: a.distance} : {left: a.distance};
                    g.css(q);
                    c.css(q);
                    b.wrap(n);
                    b.parent().append(c);
                    b.parent().append(g);
                    a.railDraggable && c.bind("mousedown", function (a) {
                        var b = f(document);
                        y = !0;
                        t = parseFloat(c.css("top"));
                        pageY = a.pageY;
                        b.bind("mousemove.slimscroll", function (a) {
                            currTop = t + a.pageY - pageY;
                            c.css("top", currTop);
                            m(0, c.position().top, !1)
                        });
                        b.bind("mouseup.slimscroll", function (a) {
                            y = !1;
                            p();
                            b.unbind(".slimscroll")
                        });
                        return !1
                    }).bind("selectstart.slimscroll", function (a) {
                        a.stopPropagation();
                        a.preventDefault();
                        return !1
                    });
                    g.hover(function () {
                        v()
                    }, function () {
                        p()
                    });
                    c.hover(function () {
                        x = !0
                    }, function () {
                        x = !1
                    });
                    b.hover(function () {
                        s = !0;
                        v();
                        p()
                    }, function () {
                        s = !1;
                        p()
                    });
                    b.bind("touchstart", function (a, b) {
                        a.originalEvent.touches.length && (z = a.originalEvent.touches[0].pageY)
                    });
                    b.bind("touchmove", function (b) {
                        k || b.originalEvent.preventDefault();
                        b.originalEvent.touches.length &&
                        (m((z - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), z = b.originalEvent.touches[0].pageY)
                    });
                    w();
                    "bottom" === a.start ? (c.css({top: b.outerHeight(false) - c.outerHeight(false)}), m(0, !0)) : "top" !== a.start && (m(f(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
                    C()
                }
            });
            return this
        }
    });
    jQuery.fn.extend({slimscroll: jQuery.fn.slimScroll})
})(jQuery);


//  document 事件
//  ==================================================
$(document).click(function () {
    $('#changeSkin').children('.panel').slideUp(30);
});


//  xiaoi
//  ==================================================
+(function () {

    function newModal (obj){
        var eleHTML;
        if ($(obj.content).length == 0){//  string
            eleHTML = '<div style="padding: 40px 140px; text-align: center;">'+ obj.content +'</div>';
        }

        if ($(obj.content).length !== 0){// dom
            eleHTML = $(obj.content).prop("outerHTML");
        }

        var maskLayer = $('<div id="maskLayer"></div>');
        var html =
            '<div id="modalWrap">'+
            '<div class="modal-title">'+
            '<span>'+ obj.title +'</span>'+
            '<i class="fa fa-close" id="closeLayer"></i>'+
            '</div>'+
            '<div class="modal-content">'+
            '<div class="content-html">'+ eleHTML +'</div>'+
            '</div>'+
            '<div class="modal-foot clearfix">'+
            '<div class="button-group pull-right">'+
            '<button class="btn btn-text" id="modalCancel">取消</button>'+
            '<button class="btn btn-theme" id="modalConfirm">确认</button>'+
            '</div>'+
            '</div>'+
            '</div>';

        maskLayer.prependTo($('body')).fadeIn(200, function (){
            $(this).css('background', 'rgba(0, 0, 0, .4)')
            $('body').css('overflow', 'hidden')
        }).append(html).fadeIn(200, function (){
            $(obj.content).removeClass('hide')
            $('#modalWrap').css({'transform': 'translate(-50%, 0)', 'margin':'100px 0'})
        })

        $('#modalCancel').click(function () {
            (obj.method.cancel||function  () {})()
            modalCancel()
        })

        $('#modalConfirm').click(function (){
            (obj.method.confirm||function  () {})()
            modalCancel ()
        })

        $('#modalWrap').click(function (e) { e.stopPropagation() })// 阻止冒泡

        // X 点击关闭
        $('#closeLayer, #maskLayer').click(function (){
            modalCancel ()
        })

        function modalCancel () {
            $('#modalWrap').css({'transform': 'translate(-50%, -110%)'}).fadeOut(100, function (){
                $('#maskLayer').css('background', 'rgba(0, 0, 0, 0)').fadeOut(200, function (){
                    $('body').css('overflow', 'auto')
                    $(this).remove()
                })
            })
        };


    };// newModal

    function sideRight (obj) {
        obj.layer ? layerHide(obj) : layerShow(obj);

        function layerShow (obj) {
            var maskLayer = $('<div id="maskLayer"></div>');
            var eleHTML = ($(obj.content).prop("outerHTML"));
            var $HTML =
                '<div id="sideRightWrap">'+
                '<div class="modal-title">'+
                '<span>'+ obj.title +'</span>'+
                '<i class="fa fa-close" id="closeLayer"></i>'+
                '</div>'+
                '<div class="modal-content">'+
                '<div class="content-html">'+ eleHTML +'</div>'+
                '</div>'+
                '</div>';

            maskLayer.prependTo($('body')).fadeIn(200, function (){
                $(this).css('background', 'rgba(0, 0, 0, .4)')
            }).append($HTML).fadeIn(200, function (){
                var width = $('#sideRightWrap').width() + 'px';//  获取宽度
                $(this).find(obj.content).removeClass('hide')
                $('#sideRightWrap').css({'transform': 'translate(0%)'}).children('.modal-content').slimScroll({
                    height: "97%",
                    width: -width,
                    size: '7px'
                }).fadeIn(function () {
                    $('body').css({'overflow':'hidden'})
                })
            })
        };

        function layerHide (obj) {
            var eleHTML = ($(obj.content).prop("outerHTML"));
            var $HTML =
                '<div id="sideRightWrap">'+
                '<div class="modal-title">'+
                '<span>'+ obj.title +'</span>'+
                '<i class="fa fa-close" id="closeLayer"></i>'+
                '</div>'+
                '<div class="modal-content">'+
                '<div class="content-html">'+ eleHTML +'</div>'+
                '</div>'+
                '</div>';

            $('body').prepend($HTML).fadeIn(200, function (){
                var width = $('#sideRightWrap').width() + 'px';//  获取宽度
                $(this).find(obj.content).removeClass('hide')
                $('#sideRightWrap').css({'transform': 'translate(0%)'}).children('.modal-content').slimScroll({
                    height: "97%",
                    width: -width,
                    size: '7px'
                });
            })
        };

        // 阻止冒泡
        $('#sideRightWrap').click(function (e) {
            e.stopPropagation()
        })


        // X 点击关闭
        $('#closeLayer, #maskLayer').click(function (){
            modalCancel ()
        })


        function modalCancel() {
            $('#sideRightWrap').css({'transform': 'translate(100%)'})//.fadeOut(function () {
                $('body').css({'overflow':'auto'})
                $('#maskLayer').css('background', 'rgba(0, 0, 0, 0)').fadeOut(function (){
                    // $('body').css('overflow', 'auto')
                    $(obj.content).addClass('hide')
                    $(this).remove()
                })
            //})
        };
        xiaoi.modalCancel = modalCancel;
    };//  sideRight

    function sideLeft (obj) { };//  sideLeft

    function loading (flag) {
        flag == 'close' ? close() : open(flag);
        function open (flag) {
            var html = '<div id="loadLayer"><div class="loader-inner line-scale"><div></div><div></div><div></div><div></div><div></div></div></div>';
            $(html).prependTo($('body')).fadeIn(function () {
                $(this).addClass('layer-show')
            })

            if(typeof flag == 'number'){
                setTimeout(function(){
                    close ()
                    toastr.info('网络超时!')
                }, flag*1000);
            }
        };

        function close () {
            $('#loadLayer>.loader-inner>div').css('background-color', 'rgba(29, 152, 249, 0)')
            $('#loadLayer').removeClass('layer-show').fadeOut('300', function () {
                $(this).remove()
            })
        };
    };// loading

    window.xiaoi = {
        modal: function (obj){
            newModal(obj);
        },
        side:{
            left: function (obj){
                sideLeft(obj);
            },
            right: function (obj) {
                sideRight(obj)
            },
        },
        loading: function (flag) {
            loading(flag)
        }
    };
})();//  xiaoi


//  多选框
//  ==================================================
+function () {
    // $('tbody').on('click', '.i-checkbox-border', function (e) {
    //     $(this).children('.i-checkbox-icon').toggleClass('scale-lg');
    // })
}();
// 复选框 以及 全选
function tableCheckbox () {
    $('tbody').on('click', '.i-checkbox-border', function (e) {
        e.stopPropagation()
        $(this).children('.i-checkbox-icon').toggleClass('scale-lg');
    })

    $('tbody').on('click', 'tr', function (e) {
        e.stopPropagation()
        $(this).find('.i-checkbox-icon').toggleClass('scale-lg')
    })

    $('table').on('click', '.allCheck', function () {
        var allCheck = $(this).children('.i-checkbox-icon').hasClass('scale-lg');
        if(allCheck){
            $(this).children('.i-checkbox-icon').removeClass('scale-lg')
            $('tbody .i-checkbox-icon').each(function (i, v) {
                $(v).removeClass('scale-lg');
            })
        }else{
            $(this).children('.i-checkbox-icon').addClass('scale-lg')
            $('tbody .i-checkbox-icon').each(function (i, v) {
                $(v).addClass('scale-lg');
            })
        }
    })
};


//  下拉框
//  ==================================================
+function () {
    var speed = 300;
    function paiTa (){
        $('.dropdown').each(function (index, item){
            $(item).children('ul').slideUp(speed)
            $(item).children('i').css({'transform':'rotate(0deg)'})
            $(item).removeClass('dropdown-shadow flag-open')
        })

    };

    $('body').on('click', '.dropdown', function (e){
        e.stopPropagation();
        var _this = $(this);
        var _ul = _this.children('ul');
        var _i = _this.children('i');
        var _li = _this.find('li');

        // 关闭
        if(_this.hasClass('flag-open')){
            _this.children('ul').slideUp(speed)
            _this.children('i').css({'transform':'rotate(0deg)'})
            _this.removeClass('dropdown-shadow flag-open')
            return;
        }

        // 打开
        paiTa ()
        _this.addClass('dropdown-shadow flag-open')
        _this.children('ul').slideDown(speed)
        _this.children('i').css({'transform':'rotate(180deg)'})

        // 点击选项
        _li.click(function (e){
            e.stopPropagation();
            _li.each(function (i, v){$(v).removeClass('li-checkbox')})// 排他

            $(this).addClass('li-checkbox')
            var option = $(this).text();
            _this.children('ul').slideUp(speed)
            _this.children('i').css({'transform':'rotate(0deg)'})
            _this.children('.dropdown-default').text(option)
            _this.removeClass('dropdown-shadow flag-open')
        })

    })

    $(document).click(function (){
        paiTa ()
    })
}();


//  导航 - navigate
//  ==================================================
+function () {
//  #navSidle  #collapseBtn  左右滑动
    function toggleCollapse(){
        var open = $("#collapseBtn").hasClass("to-close");
        if(open){
            //$('#navHead').css({'left':'0', 'width':'100%'});
            $('#navContent').css({'padding-left': '0px'});
            $('#navSidle').css('left', '-180px');
            $("#collapseBtn").removeClass("to-close").addClass("to-open");// 改变箭头方向，以及位置
        }else{
            //$('#navHead').css({'left':'180px', 'width':'calc(100% - 180px)'});
            $('#navContent').css({'padding-left': '180px'});
            $('#navSidle').css('left', '0px');
            $("#collapseBtn").removeClass("to-open").addClass("to-close");// 改变箭头方向，以及位置
        }
    };

    //  右边小箭头
    var collapseBtn =
        '<div id="collapseBtn" class="to-close" onclick="xiaoi.toggleCollapse()">'+
        '<div class="collapse-btn-nav">'+
        '<i class="fa fa-angle-left"></i>'+
        '</div>'+
        '</div>';
    $('#navSidle').prepend(collapseBtn);

    //  #navSidle  #accordion  上下收展
    $('#accordionNav a').each(function (index, item){
        var _item = $(item);
        _item.click(function (){
            // 这里是一级菜单的 a 标签
            if(_item.parent().hasClass('panel')){
                if(_item.hasClass('flag-open')){
                    _item.siblings('ul').slideToggle(200);
                    _item.children('i:last-child').css('transform', 'rotate(0deg)');
                    _item.removeClass('flag-open');
                }else{
                    _item.siblings('ul').slideToggle(200);
                    _item.children('i:last-child').css('transform', 'rotate(90deg)');
                    _item.addClass('flag-open');
                }
            }

            $('#accordionNav a').each(function (i, v){
                $(v).removeClass('active');
            });
            $(this).addClass('active');
        });

        // 默认展开父级菜单
        if(_item.hasClass('active')){
            _item.parents('ul').slideDown(200).siblings('a').addClass('flag-open').children('i:last-child').css('transform', 'rotate(90deg)');
        }
    });

    // #navSidle  accordion的滚动条
    $("#accordionNav").slimScroll({
        height: "100%",
        width: "180px",
    });

    // .content-item 的大小、 高度自适应
    contentItemHeight()
    function contentItemHeight() {
        var height = $(window).height() -61 +'px';
        $('.content-item').css('min-height', height);
    }
    $(window).resize(function () {
        //contentItemHeight()
    });
    return  window.xiaoi.toggleCollapse = toggleCollapse;
}();


//  提示框 - toastr
//  ==================================================
(function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.2',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass)
                    .attr('aria-live', 'polite')
                    .attr('role', 'alert');

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 1000,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 500,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-center',
                    timeOut: 2000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: true,
                    preventDuplicates: true,
                    progressBar: false,
                    closeButton: true //add By duanying
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function escapeHtml(source) {
                    if (source == null)
                        source = "";

                    return new String(source)
                        .replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
                }

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setSequence();
                }

                function handleEvents() {
                    $toastElement.hover(stickAround, delayedHideToast);
                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }
                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function (event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        $titleElement.append(!options.escapeHtml ? map.title : escapeHtml(map.title)).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        $messageElement.append(!options.escapeHtml ? map.message : escapeHtml(map.message)).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass('toast-close-button').attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass('toast-progress');
                        $toastElement.prepend($progressElement);
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ?
                        options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function () {
                            removeToast($toastElement);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else {
        window.toastr = factory(window.jQuery);
    }
}));


//  添加icon
//  ==================================================
addPrefix();
function addPrefix (){
    $('i[class*=icon], span[class*=icon]').each(function (index, item){
        if(!$(item).hasClass('icon iconfont')){
            $(item).addClass('icon iconfont');
        }
    });
};



