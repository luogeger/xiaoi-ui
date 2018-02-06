//  轮播图
//  ==================================================
+function ($, window) {
    var Carousel  = function (options) {
        this.init(options)
    }// Slider

    Carousel .prototype = {
        constructor: Carousel,

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

    $.fn.iCarousel  = function (options) {
        var defaults = {
            showTime: 500,
            step: 2000,
            id: this[0].id,
            isAuto: true,
            data: [],
        };

        var settings = $.extend({}, defaults, options);


        return new Carousel(settings)
    }// $.fn
}($, window);