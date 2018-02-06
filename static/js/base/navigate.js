//  导航 - navigate
//  ==================================================

+function ($, window) {
    var Sidle = function (options) {
        this.init(options)
    };// navSidle


    Sidle.prototype = {
        constructor: Sidle,

        init: function (opt) {
            // 初始化dom元素
            var $content    = $('.content-item')// .content-item
            var $container  = $('#navSidle');
            $container.html(this.render(opt))
            this.$a         = $container.find('a');// 所有a标签
            this.$btn       = $container.find('#collapseBtn');// 三明治按钮

            // 初始化事件
            $content.css({"min-height": $(window).height() -60 +"px"});// 设置.content-item的最小高度
            this.bind()
        },// init

        render: function (opt) {
            var html = '';
            // 三明治按钮
            html +=
                '<div id="collapseBtn">' +
                '<i class="fa fa-bars"></i>' +
                '</div>';

            // logo
            html +=
                '<div class="i-logo">' +
                '<img class="i-logo-lg" src="'+ opt.logo.large +'">' +
                '<img class="i-logo-sm" src="'+ opt.logo.small +'">' +
                '</div>';

            // menu
            html +=  '<div class="sidle-accordion">';
            opt.menu.forEach(function (item) {
                html += '<div class="panel">';
                if (item.active) { html += '<a href="javascript:;" class="'+ item.active +'"><i class="'+ item.icon +'"></i><span>'+ item.title +'</span>'; };
                html += '<a href="javascript:;"><i class="'+ item.icon +'"></i><span>'+ item.title +'</span>';
                if (item.child) {
                    html += '<i class="icon iconfont icon-arrow-up"></i></a><ul>';
                    // 二级菜单
                    item.child.forEach(function (item, index) {
                        if (item.active) {
                            html += '<li><a href="javascript:;" class="'+ item.active +'"><span>'+ item.title +'</span></a></li>';
                        } else {
                            html += '<li><a href="javascript:;"><span>'+ item.title +'</span></a></li>';
                        }
                    })
                    html += '</ul>';
                }// if
                else {
                    html += '</a> ';
                }// else
                html += '</div>';// .panel
            });// menu.forEach
            html +=  '</div>';
            return html;
        },// render

        bind: function (opt) {
            this.$a.each(function (index, item) {
                var _a = $(item)
                // 显示默认菜单
                if (_a.hasClass('active')) {
                    _a.parents('.panel')
                        .children('ul').slideDown(200)// 二级菜单显示
                        .siblings('a').addClass('flag-open active-parent')// a标签字体颜色变主题色
                        .children('i:last-child').css('transform', 'rotate(180deg)')// 箭头朝下
                }// if

                // click
                _a.click(function (){
                    var slim_b      = _a.parents('.i-sidle-slim').length;// 在slim模式下
                    var first_b     = _a.parent().hasClass('panel');// 是一级菜单
                    var only_b      = _a.siblings('ul').length === 0;// 没有二级菜单
                    if (slim_b && first_b && !only_b) { console.log(123); return }// 在slim模式下点击有二级菜单的一次菜单， 不需要反应
                    // 是否有二级菜单的判断，
                    if (only_b) {// 没有 => 添加.active 和 .active-parent, 排他
                        $('#navSidle a').each(function (i, v){ $(v).removeClass('active'); });// .active 排他
                        _a.addClass('active')// 添加.active

                        // 在另外的.panel
                        if (!_a.parents('ul').siblings('a').hasClass('active-parent')) {
                            $('#navSidle .panel>a').each(function (i, v){ $(v).removeClass('active-parent') });// .active-parent排他
                            _a.parents('ul').siblings('a').addClass('active-parent')
                        }

                        // 本身是一级菜单，且没有二级菜单
                        if (first_b && only_b) {
                            $('#navSidle .panel').each(function (index, item) {
                                $(item).children('a').removeClass('flag-open')// flag-open 去除
                                $(item).children('a').children('i:last-child').css('transform', 'rotate(0deg)')// icon 旋转
                                $(item).children('ul').slideUp(200)// ul 收起
                            })// 排他
                        }

                    }
                    else {// 有 => 判断是否已经开启或关闭状态，判断是一级还是二级
                        if (_a.hasClass('flag-open')) {// 处于开启状态 => 直接关闭
                            _a.removeClass('flag-open').siblings('ul').slideUp(200)
                            _a.children('i:last-child').css('transform', 'rotate(0deg)')
                        }
                        else {// 处于关闭状态，打开自己并且排他
                            $('#navSidle .panel').each(function (index, item) {
                                $(item).children('a').removeClass('flag-open')// flag-open 去除
                                $(item).children('a').children('i:last-child').css('transform', 'rotate(0deg)')// icon 旋转
                                $(item).children('ul').slideUp(200)// ul 收起
                            })// 排他

                            _a.addClass('flag-open').siblings('ul').slideDown(200)
                            _a.children('i:last-child').css('transform', 'rotate(180deg)')

                        }

                    }
                });// click

                // enter
                _a.mouseenter(function () {
                    var slim_b      = _a.parents('.i-sidle-slim').length;// 在slim模式下
                    var first_b     = _a.parent().hasClass('panel');// 是一级菜单
                    var only_b      = _a.siblings('ul').length === 0;// 没有二级菜单
                    if (slim_b && first_b && !only_b) {
                        $('#navSidle .sidle-accordion ul').each(function (index, item) {
                            $(item).fadeOut(200)
                        })
                        _a.siblings('ul').fadeIn(200)
                    }
                })// mouseenter

                // leave
                _a.parent('.panel').mouseleave(function () {
                    var slim_b      = _a.parents('.i-sidle-slim').length;// 在slim模式下
                    var first_b     = _a.parent().hasClass('panel');// 是一级菜单
                    var only_b      = _a.siblings('ul').length === 0;// 没有二级菜单
                    if (slim_b && first_b && !only_b) {
                        $('#navSidle .sidle-accordion ul').each(function (index, item) {
                            $(item).fadeOut(200)
                        })
                    }
                })// mouseleave

            })// each


            // 三明治按钮
            this.$btn.click(function () {
                var open = !$("#collapseBtn").hasClass("to-open");// true出去打开状态
                if(open){
                    $('#navContent').css({'padding-left': '60px'});
                    $('#navSidle').css('left', '0px').addClass('i-sidle-slim');
                    $('#navHead').addClass('to-open')
                    $('#collapseBtn').addClass('to-open')
                    $('#navSidle .panel').each(function (index, item) {
                        if ($(item).children('a').hasClass('flag-open')) {
                            $(item).children('ul').css('display', 'none')
                        }
                    })
                }else{
                    $('#navContent').css({'padding-left': '180px'});
                    $('#navSidle').css('left', '0px').removeClass('i-sidle-slim')
                    $('#navHead').removeClass('to-open')
                    $('#collapseBtn').removeClass('to-open')
                    $('#navSidle .panel').each(function (index, item) {
                        // $(item).children('ul').css('display', 'none')
                        if ($(item).children('a').hasClass('active-parent')) {
                            $(item).children('a').addClass('flag-open')
                            $(item).children('ul').slideDown(200)
                        }
                    })

                }
            })
        },// bind

    }// prototype

    $.fn.iSidle = function (options) {
        return new Sidle(options)

    }// $.fn
}($, window);// end