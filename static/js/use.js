// -- 如果有锚链接， 侧边导航的位置

var _hash = location.hash.substring(1);
if(_hash !== '') $('li[class='+ _hash +']').click();



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

    if (scrollDistance == 0) {
        $sidle_lis.each(function (i, v){ $(v).removeClass('li-border') });// 排他
    }
})// document


// -- 返回顶部，取消左边导航选中样式
$('#backtop').click(function () {
    $sidle_lis.each(function (i, v){ $(v).removeClass('li-border') })// 排他
    //$(document).scrollTop(0)
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
        $(item).iPaging({
            pageNo: 4,
            totalPage: 13,
            totalSize: 300,
            callback: function(num) {
                console.log(num)
            }
        });
    })

// == Carousel
    var CarouselData = [
        {title: "title-1", src: "static/images/b1.png", href: "navigate.html"},
        {title: "title-2", src: "static/images/b2.png", href: "navigate.html"},
        {title: "title-3", src: "static/images/b3.png", href: "navigate.html"},
        // {title: "title-4", src: "static/images/b4.png", href: "navigate.html"},
        // {title: "title-5", src: "static/images/b5.png", href: "navigate.html"},
        // {title: "title-6", src: "static/images/b6.png", href: "navigate.html"}
    ];
    $('#focus, #app').each(function (index, item) {
        $(item).iCarousel({
            data: CarouselData,
            width: '700px',
            height: '300px',
        })
    })

// == laydate
laydate.render({
    elem: '#dateTest' //指定元素
});

// == 换肤
$('#changeSkin li').each(function (index, item) {
    $(item).click(function () {
        var _class = $(this).attr('class')
        var str = '<link rel="stylesheet" href="static/css/'+ _class +'.css" class="theme-color">';
        $('head').append(str)

        // 改变 icon 和 文字 的颜色
        var _color = $(this).children('i').css('backgroundColor')
        $(this).parent('ul').siblings('i, span').css('color', _color)
    })

});


// == charts
// pie
+function() {
    var box = echarts.init(document.getElementById('pie-1'));
    var option = {
        silent: true,// 所有交互都取消
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",// 格式，
            show: false,// 不显示标题
        },
        legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['90%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,// hover 动画
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold',
                            color: '#222222'
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#FF8A41'
                    }
                },
                data:[
                    {
                        value:67,
                        name:'67%',
                    },
                    {
                        value:33,
                        itemStyle: {
                            normal: {
                                color: '#D1D2D3',
                            },
                            //emphasis: {color: '#D1D2D3'},// 悬浮不显示高亮
                        },
                    },
                ]
            }
        ]
    };
    box.setOption(option);
}();

+function() {
    var box = echarts.init(document.getElementById('pie-2'));
    var option = {
        silent: true,// 所有交互都取消
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",// 格式，
            show: false,// 不显示标题
        },
        legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['90%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,// hover 动画
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold',
                            color: '#222222'
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ED5565'
                    }
                },
                data:[
                    {
                        value:42,
                        name:'42%',
                    },
                    {
                        value:58,
                        itemStyle: {
                            normal: {
                                color: '#D1D2D3',
                            },
                            //emphasis: {color: '#D1D2D3'},// 悬浮不显示高亮
                        },
                    },
                ]
            }
        ]
    };
    box.setOption(option);
}();

+function() {
    var box = echarts.init(document.getElementById('pie-3'));
    var option = {
        silent: true,// 所有交互都取消
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",// 格式，
        },
        legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['90%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,// hover 动画
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold',
                            color: '#222222'
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#1D98F9'
                    }
                },
                data:[
                    {
                        value:15,
                        name:'15%',
                    },
                    {
                        value:85,
                        itemStyle: {
                            normal: {
                                color: '#D1D2D3',
                            },
                            //emphasis: {color: '#D1D2D3'},// 悬浮不显示高亮
                        },
                    },
                ]
            }
        ]
    };
    box.setOption(option);
}();

+function() {
    var box = echarts.init(document.getElementById('pie-4'));
    var option = {
        silent: true,// 所有交互都取消
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",// 格式，
        },
        legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['90%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,// hover 动画
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold',
                            color: '#222222'
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#00BFA5'
                    }
                },
                data:[
                    {
                        value:83,
                        name:'83%',
                    },
                    {
                        value:17,
                        itemStyle: {
                            normal: {
                                color: '#D1D2D3',
                            },
                            //emphasis: {color: '#D1D2D3'},// 悬浮不显示高亮
                        },
                    },
                ]
            }
        ]
    };
    box.setOption(option);
}();

//  curve
+function() {
    var box2 = echarts.init(document.getElementById('curve-2'));
    option2 = {
        //color: ['#ff0000'],
        legend: {
            data:['岗位知识','其他知识'],
            right: '5%',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '1%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap: false,// 标准坐标轴
                data : ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                name: '每小时更新一次数据',
                type : 'value',
            }
        ],
        series : [
            {
                data:[55,58,78,76,90,87,88,68,97,88,78,76,90,87,88,68,97,88,78,76,78,76,90,87],
                name:'岗位知识',
                type:'line',
                smooth: true,
                barWidth: '60%',
                showSymbol: false,// 取消折线上面的小圈
                color: 'rgba(237,85,101,1)',
                encode: {
                    x: 0,
                    y: 3
                },
                areaStyle: {// 区域样式，曲线
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(237,85,101,1)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(237,85,101,0.7)'
                            }, {
                                offset: 1,
                                color: 'rgba(237,85,101,0)'
                            }]
                        }
                    }
                },
            },

            {
                data:[35,43,21,30,42,33,29,36,29,44,25,42,33,29,36,38,45,33,29,36,36,44,42,33],
                name:'其他知识',
                type:'line',
                smooth: true,
                barWidth: '60%',
                showSymbol: false,// 取消折线上面的小圈
                color: 'rgba(29,152,248,1)',
                encode: {
                    x: 0,
                    y: 3
                },
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(29,152,248,1)'
                            }, {
                                offset: 0.5, color: 'rgba(29,152,248,0.7)'
                            }, {
                                offset: 1, color: 'rgba(29,152,248,0)'
                            }]
                        }
                    }
                },
            }
        ]
    };

    box2.setOption(option2);
}();

// bar
+function () {
    var bar1 = echarts.init(document.getElementById('bar-1'));

    var optionBar = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['客服知识', '岗位知识','金融知识','机器人知识','其他知识']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis:  {
            name: '每24小时更新一次数据',
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        series: [
            {
                name: '客服知识',
                type: 'bar',
                color: '#FF8A41',
                stack: '总量',
                barMaxWidth: '40%',
                label: {
                    normal: {
                        show: true,
                        position: 'insideTop'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '岗位知识',
                type: 'bar',
                color: '#1D98F9',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideTop'
                    }
                },
                data: [120, 132, 401, 134, 190, 230, 210]
            },
            {
                name: '金融知识',
                type: 'bar',
                color: '#ED5565',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideTop'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '机器人知识',
                type: 'bar',
                color: '#00BFA5',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideTop'
                    }
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: '其他知识',
                type: 'bar',
                color: '#906FE2',// 紫色
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideTop'
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    bar1.setOption(optionBar);
}();


// up--



