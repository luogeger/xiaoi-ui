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
    $.fn.iPaging = function(options) {
        return new Paging($(this), options);
    }
}($, window);