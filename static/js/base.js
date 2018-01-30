console.log('xiaoi');
//  页面加载
function loadMainPage(ele, url, data, callback) {
    $(ele).load(url, data, function (){
        $(ele).css({"min-height": $(window).height()-60 +"px"});

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


//  单选框
//  ==================================================
+function () {
    $('body').on('click', '.i-radio-item', function () {
        var _this = $(this)
        var otherRadio = _this.siblings('.i-radio-item')
        var classStr = 'i-radio-checked';

        if (_this.hasClass(classStr)) {
            return;
        }
        otherRadio.each(function (index, item) {
            $(item).removeClass(classStr)
        })
        _this.addClass(classStr)


    })
}();



//  多选框
//  ==================================================
+function () {
    $('body').on('click', '.i-checkbox-item', function (e) {
        var _this = $(this)
        var classStr = 'i-checkbox-checked';
        if (_this.hasClass(classStr)) {
            _this.removeClass(classStr)
            return;
        }
        _this.addClass(classStr)
    })
}();



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



//  tab
//  ==================================================
+function(){
    function tabEffect (dom, cls){
        var index;
        dom.each(function (index, item){
            $(item).children().each(function (_index, _item){
                $(_item).click(function (){
                    index = _index;
                    var _this = $(this)
                    _this.siblings('.i-tabs-tab').each(function (i, v){ $(v).removeClass(cls); });// 排他
                    _this.addClass(cls);

                    // 同步切换内容
                    contentShow (_this, index)
                    function contentShow (_this, _index) {
                        var items = _this.parent().siblings('.i-tabs-content').children('.i-tabs-item');
                        items.each(function (index, item) {
                            $(item).removeClass('show')
                            if (index == _index) {
                                $(item).addClass('show')
                            }
                        })
                    }
                })
            })
        })
    };

    $('body').on('click', '.i-tabs-tab', function() {
        // 根据父元素
        var _index;
        var self = this;
        var _this = $(this);
        var _class = _this.parent().attr('class')
        var classActive = _class.substring(7, _class.length) +'-active';
        var tabs = _this.parent().children('.i-tabs-tab');
        var items = _this.parent().siblings('.i-tabs-content').children('.i-tabs-item');

        // 索引同步、切换tab
        tabs.each(function (index, item) {
            $(item).removeClass(classActive)
            if (item == self) {
                _index = index;
            }
        })
        _this.addClass(classActive)

        // 切换 content
        items.each(function (index, item) {
            $(item).removeClass('show')
            if (index == _index) {
                $(item).addClass('show')
            }
        })
    })
}();



//  分页
//  ==================================================
+function () {
    // $('body').on('click', '.i-line-num', function () {
    //     var _this = $(this);
    //     _this.siblings('.i-line-num').removeClass('i-line-current')
    //     _this.addClass('i-line-current')
    //     if (_this.text() == 1) {
    //         _this.parent().siblings('.i-line-first').addClass('i-line-disabled')
    //         _this.parent().siblings('.i-line-prev').addClass('i-line-disabled')
    //     }
    //     else {
    //         _this.parent().siblings('.i-line-first').removeClass('i-line-disabled')
    //         _this.parent().siblings('.i-line-prev').removeClass('i-line-disabled')
    //     }
    // })
}();

+function ($, window) {
    //定义分页类
    function Paging(element, options) {
        this.element = element;
        //传入形参
        this.options = {
            pageNo: options.pageNo || 1,
            totalPage: options.totalPage,// 总共多少页
            totalSize: options.totalSize,//
            callback: options.callback
        };
        //根据形参初始化分页html和css代码
        this.init();
    }

    //对Paging的实例对象添加公共的属性和方法
    Paging.prototype = {
        constructor: Paging,

        init: function() {
            this.creatHtml();
            this.bindEvent();
        },// init

        creatHtml: function() {
            var me = this;
            var html = "";
            var current = me.options.pageNo;
            var total = me.options.totalPage;
            var totalNum = me.options.totalSize;
            var disabled = "";

            //console.log(current, total, totalNum);

            current == 1 ? disabled = "i-line-disabled" : disabled = "";
            html +=
                "<div class=\"i-line-first  "+ disabled +"\">首页</div>" +
                "<div class=\"i-line-prev "+ disabled +"\">上一页</div>" +
                "<ul class=\"i-line-page\">";

            //== 判断页容量
            if (total >7) {
                // 判断当前页
                // 第五页的时候，出现。。。
                // 当前页 +2 < total
                // =========================================
                if(current < 5) {
                    for(var i = 1; i < 6; i++) {
                        if(current == i) {
                            html += "<li class=\"i-line-num i-line-current\">"+ i +"</li>";
                        } else {
                            html += "<li class=\"i-line-num\">"+ i +"</li>";
                        }
                    }
                    html +=
                        "<li class=\"i-line-omit\">· · ·</li>" +
                        "<li class=\"i-line-num\">"+ total +"</li>";
                }
                else {
                    //判断页码在末尾的时候
                    if(current < total - 3) {
                        html +=
                            "<li class=\"i-line-num\">1</li>" +
                            "<li class=\"i-line-omit\">· · ·</li>";
                        for(var i = current - 2; i < current + 3; i++) {
                            if(current == i) {
                                html += "<li class=\"i-line-num i-line-current\">"+ i +"</li>";
                            } else {
                                html += "<li class=\"i-line-num\">"+ i +"</li>";
                            }
                        }
                        html +=
                            "<li class=\"i-line-omit\">· · ·</li>" +
                            "<li class=\"i-line-num\">"+ total +"</li>";
                        //页码在中间部分时候
                    } else {
                        html +=
                            "<li class=\"i-line-num\">1</li>" +
                            "<li class=\"i-line-omit\">· · ·</li>";
                        for(var i = total - 4; i < total + 1; i++) {
                            if(current == i) {
                                html += "<li class=\"i-line-num i-line-current\">"+ i +"</li>";
                            } else {
                                html += "<li class=\"i-line-num\">"+ i +"</li>";
                            }
                        }
                    }
                }
            }
            else {
                for(var i = 1; i < total + 1; i++) {
                    if(current == i) {
                        html += "<li class=\"i-line-num i-line-current\">"+ i +"</li>";
                    } else {
                        html += "<li class=\"i-line-num\">"+ i +"</li>";
                    }
                }
            }

            current == total ? disabled = "i-line-disabled" : disabled = "";
            html +=
                "</ul>" +
                "<div class=\"i-line-next  "+ disabled +"\">下一页</div>" +
                "<div class=\"i-line-last  "+ disabled +"\">尾页</div>";

            html +=
                "<input type=\"text\" class=\"i-line-input\" value=\"\">" +
                "<div class=\"i-line-goto\">Go</div>";
            //html += "<span class='totalPages'> 共<span>"+total+"</span>页 </span>";
            //html += "<span class='totalSize'> 共<span>"+totalNum+"</span>条记录 </span>";
            me.element.html(html);
        },// creatHtml

        bindEvent: function () {
            // 点击事件都只是为了改变current的值，再渲染一遍， 再把这个值传递出去
            var _this = this;
            this.element.on('click', '.i-line-num', function () {
                _this.options.pageNo = +$(this).text();
                _this.creatHtml()
                if (_this.options.callback) {
                    _this.options.callback(_this.options.pageNo)
                }
            })// li

            this.element.on('click', 'div', function () {
                var cls = $(this).attr('class').trim();
                switch(cls) {
                    case 'i-line-first':
                        _this.options.pageNo = 1;
                        break;

                    case 'i-line-prev':
                        _this.options.pageNo = _this.options.pageNo -1;
                        break;

                    case 'i-line-next':
                        _this.options.pageNo = _this.options.pageNo +1;
                        break;

                    case 'i-line-last':
                        _this.options.pageNo = _this.options.totalPage;
                        break;

                    case 'i-line-goto':
                        _this.options.pageNo = +$(this).siblings('input').val();
                        break;

                    default:
                        console.log('return')
                        return;
                }
                _this.creatHtml()
                if (_this.options.callback) {
                    _this.options.callback(_this.options.pageNo)
                }
            })// div

        },// bindEvent
    };// Paging

    //通过jQuery对象初始化分页对象
    $.fn.Paging = function(options) {
        return new Paging($(this), options);
    }
}($, window);



//  进度条
//  ==================================================
+function () {
    // fa fa-check-circle
    var step = 0.2;
    var timer = setInterval(function () {
        var width;
        step += 0.1;
        progress(step)

        if (step >= 59.6) {
            clearInterval(timer)
        }

        function progress (step) {
            $('#iProBar').css('width', step +'%')
            $('#iProNum').text(step.toFixed(1))
        }
    }, 100);
}();



//  导航 - navigate
//  ==================================================
+function () {
//  #navSidle  #collapseBtn  左右滑动
    function toggleCollapse(){
        var open = $("#collapseBtn").hasClass("to-close");
        if(open){
            $('#navContent').css({'padding-left': '0px'});
            $('#navSidle').css('left', '-180px');
            $("#collapseBtn").removeClass("to-close").addClass("to-open");// 改变箭头方向，以及位置
        }else{
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
            // 二级菜单，开启关闭的判断
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

            // 是否有二级菜单的判断，如果没有二级菜单，就不添加 .active
            if (_item.siblings('ul').length === 0) {
                $('#accordionNav a').each(function (i, v){
                    $(v).removeClass('active');
                });

                $(this).addClass('active');
            }

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



//  树形菜单 - tree-view
//  ==================================================
+function () {
    $('.i-tree-view li').each(function (index, item){
        var _item = $(item);// 这个是 li 标签

        _item.prepend('<i class="icon-fold-close-fill"></i>');
        if(_item.has('ul').length){
            _item.prepend('<i class="icon-plus-square"></i>');
            collapse(_item);// 展开目录
        }else{
            _item.prepend('<i class="icon-min-square"></i>');
        }

        _item.children('span').dblclick(function (){
            // 双击的时候，让其他的 未保存/取消 的状态消失, -- 必须放在 rename() 的前面
            $('.i-tree-view li .change .cancel').each(function (i, v){ $(v).trigger('click'); });

            rename(this);// 改名
        });
    });

    // 展开目录
    function collapse (_item){
        _item.children('ul').css({'display': 'none'});
        _item.children('.icon-min-square').addClass('icon-plus').removeClass('icon-min-square');
        _item.children('.icon-plus-square').click(function (){
            if($(this).hasClass('flag-open')){
                $(this).removeClass('flag-open');
                $(this).addClass('icon-plus-square').removeClass('icon-min-square');
                $(this).siblings('ul').slideToggle(100);
                return;
            }
            $(this).addClass('icon-min-square').removeClass('icon-plus-square');
            $(this).siblings('ul').slideToggle(100);
            $(this).addClass('flag-open');
        })
    };

    // 改名
    function rename (self){
        var _this = $(self);// 这个是 span 标签
        var width = _this.width() + 15 + 'px';
        var html = '<div class="change">' +
            '<input type="text">' +
            '<i class="cancel icon-close-square"></i>' +
            '<i class="save icon-check-square"></i>' +
            '</div>';
        _this.after(html);
        addPrefix();// 添加前缀
        _this.siblings('.change').children('input').css('width', width);
        _this.siblings('.change').children('input').val(_this.text());
        _this.css({'display': 'none'});

        var changeDiv = _this.siblings('.change');// input、cancel、save 的父元素div

        changeDiv.children('input')[0].select();// input 里面的文字被选中
        changeDiv.children('input').click(function (e){
            e.stopPropagation();
        });

        changeDiv.children('.cancel').click(function (e){
            e.stopPropagation();
            cancelRename(_this, changeDiv);// 取消改名
        });

        changeDiv.children('.save').click(function (e){
            saveRename(_this, changeDiv);// 保存改名
            e.stopPropagation();
        });
    };

    // 取消改名
    function cancelRename (span, div){
        div.remove();
        span.css({'display': 'inline-block'});
    };

    // 保存改名
    function saveRename (span, div){
        var text = div.children('input').val();
        span.text(text);
        div.remove();
        span.css({'display': 'inline-block'});
    };

}();



//  目录结构 - tree-view-slim
//  ==================================================
+function () {
    $('.i-tree-view-slim li').each(function (index, item){
        var _item = $(item);// 这是 li 标签
        // hover -- 效果
        _item.children('a').hover(function (){
            var _this = $(this);
            if(_this.hasClass('flag-open')){
                return;
            }
            _this.toggleClass('a-hover');
        },function (){
            var _this = $(this);
            _this.removeClass('a-hover');
        })

        // 点击 -- 展开目录
        if(_item.has('ul').length){
            collapse(_item, 'if');// 展开目录 -- 如果有 子级菜单
        }else{
            collapse(_item);// 展开目录 -- 没有 子级菜单
        };
    });

    // 展开目录
    function collapse (_item, flag){
        if(flag == 'if'){
            _item.children('a').prepend('<i class="icon-contract"></i>');
            _item.children('ul').css({'display': 'none'});
            _item.children('a').click(function (){
                var _this = $(this);
                clearClick();// 遍历所有 a 标签，清除 点击样式
                if(_this.hasClass('flag-open')){
                    _this.siblings('ul').slideToggle(100);
                    _this.children('i').css({'transform':'rotate(0deg)'});
                    _this.removeClass('flag-open');
                    _this.addClass('a-hasChild');
                    return;
                }
                _this.siblings('ul').slideToggle(100);
                _this.children('i').css({'transform':'rotate(90deg)'});
                _this.addClass('flag-open a-hasChild');
            });
        }
        else{
            _item.children('a').prepend('<i class="icon-circle"></i>');
            _item.children('a').click(function (){
                clearClick();// 遍历所有 a 标签，清除 点击样式
                $(this).addClass('a-noChild');
            });
        };

        // 遍历所有 a 标签，清除 点击样式
        function clearClick (){
            $('.i-tree-view-slim li').each(function (i, v){
                $(v).children('a').removeClass('a-noChild a-hasChild');
            })
        };
    };

}();



//  轮播图
//  ==================================================
+function ($, window) {
    var Slide = function (options) {
        this.init(options)
    }// Slider

    Slide.prototype = {
        constructor: Slide,

        init: function (options) {
            this.containerID = options.id;
            this.showTime = options.showTime;
            this.isAuto = options.isAuto;
            this.data = options.data;
            this.length = this.data.length;
            this.step = options.step;

            // 初始化变量
            this.timerID = '';
            this.index = 0;

            // 初始化DOM元素，设置html内容
            var $container = $("#" + this.containerID);
            $container.html( this.parseHTML(options));
            this.$slide     = $container.find(".i-slide");                  // 最外面div
            this.$img       = $container.find(".slide-img");                // 图片的 li标签
            this.$circle    = $container.find(".slide-circle-item");        // 圆圈的 li标签
            this.$prev      = $container.find(".slide-direction-left");     // 上一个
            this.$next      = $container.find(".slide-direction-right");    // 下一个

            // 初始化
            this.slide()// 显示第一张图片 和 第一个圆圈的样式
            this.bindEvent()
        },// init

        parseHTML: function(options) {
            var html = '';

            html += '<div class="i-slide">';
            html += '<ul class="slide-images" style=\"width:'+ options.width +';height:'+ options.height +';\">';
            this.data.forEach(function(item) {
                html +=
                    '<li class="slide-img">' +
                    '<a href=\"'+ item.href +'\">' +
                    '<img src="' + item.src + '" title="' +item.title+ '"/>' +
                    '</a>' +
                    '</li>';
            });
            html += '</ul>';// ul

            //html += '<div class="slide-opera">';
            // 左右方向键
            html +=
                '<div class="slide-direction">' +
                '<div class="slide-direction-left">&lt;</div>' +
                '<div class="slide-direction-right">&gt;</div>' +
                '</div>';
            // 圆圈索引键
            html += '<ul class="slide-circle">';
            this.data.forEach(function (item, index) {
                html += '<li class="slide-circle-item" data-index="' +index+ '"><i class="fa fa-circle"></i></li>'
            })
            html += '</ul>';// .slide-circle
            //html += '</div>';// .slide-opera


            html += '</div>';// .i-slide

            return html;
        },// parseHTML

        slide: function(index) {
            index = index || 0;
            // 播放下一张
            this.$img
                .eq(index).fadeIn(this.showTime)
                .siblings().fadeOut(this.showTime);
            // 修改 数字导航 样式
            this.$circle.eq(index).addClass("circle-hover")
                .siblings().removeClass("circle-hover")

        },// slide -- 根据索引进行切换

        setIndex: function(index, length) {
            // 设置索引号
            if(index > length - 1) {
                this.index = 0;
            } else if(index < 0) {
                this.index = length - 1;
            } else {
                this.index = index;
            }

        },// setIndex -- 重置索引

        bindEvent: function() {
            var _this = this;
            // 向左滑动
            this.$prev.on("click", function() {
                _this.index -= 1;
                _this.setIndex(_this.index, _this.length);
                _this.slide(_this.index);
            });

            // 向右滑动
            this.$next.on("click", function() {
                _this.index += 1;
                _this.setIndex(_this.index, _this.length);
                _this.slide(_this.index);
            });

            // 圆圈导航
            this.$circle.on("click", function () {
                var index = $(this).attr("data-index");
                _this.slide(index);// 先跳转到这里
                _this.index = +index;// 再重新设置索引，让定时器在此刻的顺序继续轮播，注意数据类型
            })

            // 取消定时器
            this.$slide.on("mouseenter", function() {
                clearInterval(_this.timerID);
            });

            // 开启定时器
            this.$slide.on("mouseleave", function() {
                _this.isAuto && _this.autoPlay();
            });

            // 自动播放
            this.isAuto && this.autoPlay()
        },// bindEvent -- 只是为了控制索引

        autoPlay: function() {
            var _this = this;
            var autoPlay = function() {
                _this.index += 1;
                _this.setIndex(_this.index, _this.length);
                _this.slide(_this.index);
            };

            this.timerID = setInterval(autoPlay, this.step);
        }


    }// prototype

    $.fn.Slide = function (options) {
        var defaults = {
            showTime: 500,
            step: 2000,
            id: this[0].id,
            isAuto: true,
            data: [],
        };

        var settings = $.extend({}, defaults, options);


        return new Slide(settings)
    }// $.fn
}($, window);



//  日期 datePicker
//  ==================================================
+function () {
    //  字符串拼接、追加
    $('.datePicker').each(function (index, item){
        var inputStr = $(item).html();
        var htmlStr = '';

        strJoin();
        function strJoin (){
            htmlStr =
                '<div class="container">'+
                '<div class="inputBox">'+
                inputStr +
                '<i class="icon-cale-a"></i>'+
                '</div>'+
                '<div class="dateBox">'+
                '<!-- 初始化 -->'+
                '<div class="init-box">'+
                '<div class="date-head">'+
                '<i class="icon-arrow-dbLeft prev-year"></i>'+
                '<i class="icon-arrow-left prev-month"></i>'+
                '<span class="select-time">'+
                '<span class="select-year" data-val="2017">2017年</span>'+
                '<span class="select-month" data-val="09">9月</span>'+
                '</span>'+
                '<i class="icon-arrow-right next-month"></i>'+
                '<i class="icon-arrow-dbRight next-year"></i>'+
                '</div>'+
                '<div class="date-body">'+
                '<table>'+
                '<thead>'+
                '<tr>'+
                '<th>一</th>'+
                '<th>二</th>'+
                '<th>三</th>'+
                '<th>四</th>'+
                '<th>五</th>'+
                '<th>六</th>'+
                '<th>日</th>'+
                '</tr>'+
                '</thead>'+
                '<tbody>'+
                '<tr>'+
                '<td class="inactive">28</td>'+
                '<td class="inactive">29</td>'+
                '<td class="inactive">30</td>'+
                '<td class="inactive">31</td>'+
                '<td>1</td>'+
                '<td>2</td>'+
                '<td>3</td>'+
                '</tr>'+
                '<tr>'+
                '<td>4</td>'+
                '<td>5</td>'+
                '<td>6</td>'+
                '<td>7</td>'+
                '<td>8</td>'+
                '<td>9</td>'+
                '<td>10</td>'+
                '</tr>'+
                '<tr>'+
                '<td class="active today">11</td>'+
                '<td>12</td>'+
                '<td>13</td>'+
                '<td>14</td>'+
                '<td>15</td>'+
                '<td>16</td>'+
                '<td>17</td>'+
                '</tr>'+
                '<tr>'+
                '<td>18</td>'+
                '<td>19</td>'+
                '<td>20</td>'+
                '<td>21</td>'+
                '<td>22</td>'+
                '<td>23</td>'+
                '<td>24</td>'+
                '</tr>'+
                '<tr>'+
                '<td>25</td>'+
                '<td>26</td>'+
                '<td>27</td>'+
                '<td>28</td>'+
                '<td>29</td>'+
                '<td>30</td>'+
                '<td class="inactive">1</td>'+
                '</tr>'+
                '<tr>'+
                '<td class="inactive">2</td>'+
                '<td class="inactive">3</td>'+
                '<td class="inactive">4</td>'+
                '<td class="inactive">5</td>'+
                '<td class="inactive">6</td>'+
                '<td class="inactive">7</td>'+
                '<td class="inactive">8</td>'+
                '</tr>'+
                '</tbody>'+
                '</table>'+
                '</div>'+
                '<div class="date-foot">'+
                '<span class="foot-time">'+
                '<input type="text" class="select-hour" value="00">:'+
                '<input type="text" class="select-minute" value="00">:'+
                '<input type="text" class="select-second" value="00">'+
                '</span>'+
                '<span class="foot-btn">'+
                '<span class="btn-today" class="datePickerNow">此刻</span>'+
                '<span class="btn-empty" class="datePickerEmpty">清空</span>'+
                '<span class="btn-ok" class="datePickerConfirm">确认</span>'+
                '</span>'+
                '</div>'+
                '</div>'+
                '<!-- 年份 -->'+
                '<div class="year-box">'+
                '<div class="date-head">'+
                '<i class="icon-arrow-dbLeft prev-year"></i>'+
                '<span class="select-year">2010 - 2019</span>'+
                '<i class="icon-arrow-dbRight next-year"></i>'+
                '</div>'+
                '<div class="date-body">'+
                '<table>'+
                '<tbody>'+
                '<tr>'+
                '<td><span><i class="icon-arrow-dbLeft"></i></span></td>'+
                '<td><span>2010</span></td>'+
                '<td><span>2011</span></td>'+
                '</tr>'+
                '<tr>'+
                '<td><span>2012</span></td>'+
                '<td class="active"><span>2013</span></td>'+
                '<td><span>2014</span></td>'+
                '</tr>'+
                '<tr>'+
                '<td><span>2015</span></td>'+
                '<td><span>2016</span></td>'+
                '<td><span>2017</span></td>'+
                '</tr>'+
                '<tr>'+
                '<td><span>2018</span></td>'+
                '<td><span>2019</span></td>'+
                '<td><span><i class="icon-arrow-dbRight"></i></span></td>'+
                '</tr>'+
                '</tbody>'+
                '</table>'+
                '</div>'+
                '</div>'+
                '<!-- 月份 -->'+
                '<div class="month-box">'+
                '<div class="date-head">'+
                '<i class="icon-arrow-dbLeft prev-year"></i>'+
                '<span class="select-month">2017</span>'+
                '<i class="icon-arrow-dbRight next-year"></i>'+
                '</div>'+
                '<div class="date-body">'+
                '<table>'+
                '<tbody>'+
                '<tr>'+
                '<td><span>一月</span></td>'+
                '<td><span>二月</span></td>'+
                '<td><span>三月</span></td>'+
                '</tr>'+
                '<tr>'+
                '<td><span>四月</span></td>'+
                '<td><span>五月</span></td>'+
                '<td><span>六月</span></td>'+
                '</tr>'+
                '<tr>'+
                '<td><span>七月</span></td>'+
                '<td><span>八月</span></td>'+
                '<td class="active"><span>九月</span></td>'+
                '</tr>'+
                '<tr>'+
                '<td><span>十月</span></td>'+
                '<td><span>十一月</span></td>'+
                '<td><span>十二月</span></td>'+
                '</tr>'+
                '</tbody>'+
                '</table>'+
                '</div>'+
                '</div>'+
                '<!-- 小时 -->'+
                '<div class="hour-box">'+
                '<div class="date-head">'+
                '<span>选择小时</span>'+
                '</div>'+
                '<div class="date-body">'+
                '<table>'+
                '<tbody>'+
                '<tr>'+
                '<td>0</td>'+
                '<td>1</td>'+
                '<td>2</td>'+
                '<td>3</td>'+
                '</tr>'+
                '<tr>'+
                '<td>4</td>'+
                '<td>5</td>'+
                '<td>6</td>'+
                '<td class="active">7</td>'+
                '</tr>'+
                '<tr>'+
                '<td>8</td>'+
                '<td>9</td>'+
                '<td>10</td>'+
                '<td>11</td>'+
                '</tr>'+
                '<tr>'+
                '<td>12</td>'+
                '<td>13</td>'+
                '<td>14</td>'+
                '<td>15</td>'+
                '</tr>'+
                '<tr>'+
                '<td>16</td>'+
                '<td>17</td>'+
                '<td>18</td>'+
                '<td>19</td>'+
                '</tr>'+
                '<tr>'+
                '<td>20</td>'+
                '<td>21</td>'+
                '<td>22</td>'+
                '<td>23</td>'+
                '</tr>'+
                '</tbody>'+
                '</table>'+
                '</div>'+
                '</div>'+
                '<!-- 分钟 -->'+
                '<div class="minute-box">'+
                '<div class="date-head">'+
                '<span>选择小时</span>'+
                '</div>'+
                '<div class="date-body">'+
                '<table>'+
                '<tbody>'+
                '<tr>'+
                '<td>0</td>'+
                '<td>1</td>'+
                '<td>2</td>'+
                '<td>3</td>'+
                '<td>4</td>'+
                '<td>5</td>'+
                '<td>6</td>'+
                '<td>7</td>'+
                '<td>8</td>'+
                '<td>9</td>'+
                '</tr>'+
                '<tr>'+
                '<td>10</td>'+
                '<td>11</td>'+
                '<td class="active">12</td>'+
                '<td>13</td>'+
                '<td>14</td>'+
                '<td>15</td>'+
                '<td>16</td>'+
                '<td>17</td>'+
                '<td>18</td>'+
                '<td>19</td>'+
                '</tr>'+
                '<tr>'+
                '<td>20</td>'+
                '<td>21</td>'+
                '<td>22</td>'+
                '<td>23</td>'+
                '<td>24</td>'+
                '<td>25</td>'+
                '<td>26</td>'+
                '<td>27</td>'+
                '<td>28</td>'+
                '<td>29</td>'+
                '</tr>'+
                '<tr>'+
                '<td>30</td>'+
                '<td>31</td>'+
                '<td>32</td>'+
                '<td>33</td>'+
                '<td>34</td>'+
                '<td>35</td>'+
                '<td>36</td>'+
                '<td>37</td>'+
                '<td>38</td>'+
                '<td>39</td>'+
                '</tr>'+
                '<tr>'+
                '<td>40</td>'+
                '<td>41</td>'+
                '<td>42</td>'+
                '<td>43</td>'+
                '<td>44</td>'+
                '<td>45</td>'+
                '<td>46</td>'+
                '<td>47</td>'+
                '<td>48</td>'+
                '<td>49</td>'+
                '</tr>'+
                '<tr>'+
                '<td>50</td>'+
                '<td>51</td>'+
                '<td>52</td>'+
                '<td>53</td>'+
                '<td>54</td>'+
                '<td>55</td>'+
                '<td>56</td>'+
                '<td>57</td>'+
                '<td>58</td>'+
                '<td>59</td>'+
                '</tr>'+
                '</tbody>'+
                '</table>'+
                '</div>'+
                '</div>'+
                '<!-- 秒数 -->'+
                '<div class="second-box">'+
                '<div class="date-head">'+
                '<span>选择秒</span>'+
                '</div>'+
                '<div class="date-body">'+
                '<table>'+
                '<tbody>'+
                '<tr>'+
                '<td>0</td>'+
                '<td>1</td>'+
                '<td>2</td>'+
                '<td>3</td>'+
                '<td>4</td>'+
                '<td>5</td>'+
                '<td>6</td>'+
                '<td>7</td>'+
                '<td>8</td>'+
                '<td>9</td>'+
                '</tr>'+
                '<tr>'+
                '<td>10</td>'+
                '<td>11</td>'+
                '<td>12</td>'+
                '<td class="active">13</td>'+
                '<td>14</td>'+
                '<td>15</td>'+
                '<td>16</td>'+
                '<td>17</td>'+
                '<td>18</td>'+
                '<td>19</td>'+
                '</tr>'+
                '<tr>'+
                '<td>20</td>'+
                '<td>21</td>'+
                '<td>22</td>'+
                '<td>23</td>'+
                '<td>24</td>'+
                '<td>25</td>'+
                '<td>26</td>'+
                '<td>27</td>'+
                '<td>28</td>'+
                '<td>29</td>'+
                '</tr>'+
                '<tr>'+
                '<td>30</td>'+
                '<td>31</td>'+
                '<td>32</td>'+
                '<td>33</td>'+
                '<td>34</td>'+
                '<td>35</td>'+
                '<td>36</td>'+
                '<td>37</td>'+
                '<td>38</td>'+
                '<td>39</td>'+
                '</tr>'+
                '<tr>'+
                '<td>40</td>'+
                '<td>41</td>'+
                '<td>42</td>'+
                '<td>43</td>'+
                '<td>44</td>'+
                '<td>45</td>'+
                '<td>46</td>'+
                '<td>47</td>'+
                '<td>48</td>'+
                '<td>49</td>'+
                '</tr>'+
                '<tr>'+
                '<td>50</td>'+
                '<td>51</td>'+
                '<td>52</td>'+
                '<td>53</td>'+
                '<td>54</td>'+
                '<td>55</td>'+
                '<td>56</td>'+
                '<td>57</td>'+
                '<td>58</td>'+
                '<td>59</td>'+
                '</tr>'+
                '</tbody>'+
                '</table>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>';
        };

        $(item).html(htmlStr);
    })

    //  box 显示隐藏
    $('.datePicker .dateBox').click(function (e){ e.stopPropagation(); });//  阻止冒泡
    $('.datePicker .inputBox').click(function (e){
        e.stopPropagation();// 先阻止冒泡
        $('.datePicker .dateBox').each(function (index, item){ $(item).slideUp(10); })// 在排他
        $(this).siblings('.dateBox').slideDown(10);
    });

    // document
    $(document).click(function () {
        $('.dateBox').slideUp(10);
    })




    var $initBox = $('.datePicker .init-box');// 初始化
    var $yearBox = $('.datePicker .year-box');// 年份
    var $monthBox = $('.datePicker .month-box');// 月份
    var $hourBox = $('.datePicker .hour-box');// 小时
    var $minuteBox = $('.datePicker .minute-box');// 分钟
    var $secondBox = $('.datePicker .second-box');// 秒数
    // td 外面追加 span, 初始化、小时、分钟、秒数
    $('.datePicker .init-box td, .datePicker .hour-box td, .datePicker .minute-box td, .datePicker .second-box td').each(function (index, item){
        var text = $(item).text();
        $(item).text('').append('<span>'+ text +'</span>');
    });

    // 年 (4)
    $('.datePicker  .select-year').click(function (){
        var _this = $(this);
        _this.parents('.init-box').css('display', 'none');
        _this.parents('.init-box').siblings('.year-box').css('display','block');
        var allTd= $(this).parents('.init-box').siblings('.year-box').find('td');
        allTd.each(function (index, item){
            $(item).click(function (){
                if(index !== 0 && index !== allTd.length - 1){
                    _this.parents('.init-box').css('display', 'block');
                    $(item).parents('.year-box').css('display','none');
                }
            })
        })
    })

    // 月 (2)
    $('.datePicker  .select-month').click(function (){
        var _this = $(this);
        _this.parents('.init-box').css('display', 'none');
        _this.parents('.init-box').siblings('.month-box').css('display','block');
        var allTd= $(this).parents('.init-box').siblings('.month-box').find('td');
        allTd.each(function (index, item){
            $(item).click(function (){
                _this.parents('.init-box').css('display', 'block');
                $(item).parents('.month-box').css('display','none');
            })
        })
    })

    // 日
    $('.datePicker  .init-box .date-body tbody td').each(function (index, item){
        var _item = $(item);
        _item.click(function (){
            $(this).parents('tbody').find('td').each(function (i, v){ $(v).removeClass('active'); });// 先排他
            $(this).addClass('active');// 再加上
            getTime(this);
        })
    })

    // 小时
    $('.datePicker  .select-hour').click(function (){
        var _this = $(this);
        _this.parents('.init-box').css('display', 'none');
        _this.parents('.init-box').siblings('.hour-box').css('display','block');
        $(this).parents('.init-box').siblings('.hour-box').find('td').each(function (index, item){
            $(item).click(function (){
                _this.parents('.init-box').css('display', 'block');
                $(item).parents('.hour-box').css('display','none');
                var val = $(this).children('span').text();// 获取值
                if(parseInt(val) <  10){ val = '0' + val; };//  前面加0
                $(this).parents('.hour-box').siblings('.init-box').find('.select-hour').val(val)[0].focus();// 返回input获取焦点
                getTime(this);
            })
        })
    })

    // 分钟
    $('.datePicker  .select-minute').click(function (){
        var _this = $(this);
        _this.parents('.init-box').css('display', 'none');
        _this.parents('.init-box').siblings('.minute-box').css('display','block');
        $(this).parents('.init-box').siblings('.minute-box').find('td').each(function (index, item){
            $(item).click(function (){
                _this.parents('.init-box').css('display', 'block');
                $(item).parents('.minute-box').css('display','none');
                var val = $(this).children('span').text();// 获取值
                if(parseInt(val) <  10){ val = '0' + val; };//  前面加0
                $(this).parents('.minute-box').siblings('.init-box').find('.select-minute').val(val)[0].focus();// 返回input获取焦点
                getTime(this);
            })
        })
    })

    // 秒数
    $('.datePicker  .select-second').click(function (){
        var _this = $(this);
        _this.parents('.init-box').css('display', 'none');
        _this.parents('.init-box').siblings('.second-box').css('display','block');
        $(this).parents('.init-box').siblings('.second-box').find('td').each(function (index, item){
            $(item).click(function (){
                _this.parents('.init-box').css('display', 'block');
                $(item).parents('.second-box').css('display','none');
                var val = $(this).children('span').text();// 获取值
                if(parseInt(val) <  10){ val = '0' + val; };//  前面加0
                $(this).parents('.second-box').siblings('.init-box').find('.select-second').val(val)[0].focus();// 返回input获取焦点
                getTime(this);
            })
        })
    })

    // 清空
    $('.datePicker .init-box .btn-empty').click(function (){
        $(this).parents('.dateBox').siblings('.inputBox').children('input').val('');
    })

    // 确认
    $('.datePicker .init-box .btn-ok').click(function (){
        $(this).parents('.dateBox').slideUp(10);
    })

    // 此刻
    $('.datePicker .init-box .btn-today').click(function (){

    })




   // 获取值显示到input
    function getTime (ele){
        var initBox = $(ele).parents('.container').find('.init-box');
        var year = initBox.children('.date-head').find('.select-year').data('val');
        var month = initBox.children('.date-head').find('.select-month').data('val');
        var today = initBox.children('.date-body').find('.active span').text();
        if(parseInt(today) <  10){ today = '0' + today; };//  前面加0
        var hour = initBox.children('.date-foot').find('.select-hour').val();
        var minute = initBox.children('.date-foot').find('.select-minute').val();
        var second = initBox.children('.date-foot').find('.select-second').val();


        var results = year +'-'+ month +'-'+ today +'  '+ hour +':'+ minute +':'+ second;
        initBox.parent('.dateBox').siblings('.inputBox').children('input').val(results);
    };

}();// end=datePicker



//
//  ==================================================
+function () {

}();



//
//  ==================================================
+function () {

}();



//
//  ==================================================
+function () {

}();



//
//  ==================================================
+function () {

}();



//
//  ==================================================
+function () {

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



