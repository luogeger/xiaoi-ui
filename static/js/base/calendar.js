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

+function ($, window) {
    var Calendar = function (options) {
        this.init(options)
    };//

    Calendar.prototype = {
        constructor: Calendar,

        init: function (ele) {
            this.render(ele)// 先追加 container, input-box, calendar-box
            this.$container     = $(ele).parents('.i-date-picker-container');
            this.$inputBox      = $(ele).parent();
            this.$calendarBox   = $(ele).parent().siblings('.date-calendar-box');

            //
            this.eventsObj      = this.events();// 方法变对象
            this.bind()
        },// init

        render: function (ele) {
            var containerHTML =
                '<div class="i-date-picker-container">' +
                '<div class="date-input-box  icon iconfont icon-cale-a"></div>' +
                '<div class="date-calendar-box"></div></div>';
            $(ele).wrap(containerHTML)
        },// render

        bind: function () {
            var _this = this;
            this.$inputBox.click(this.eventsObj.calendarShow)

            // document
            $(document).click(function () {
                _this.eventsObj.colorHide()
            })
        },// bind

        events: function () {
            var _this = this;
            return {
                colorHide: function () {// 所有的边框颜色都清除
                    $('.i-date-picker-container').each(function (index, item) {
                        $(item).find('.date-input-box').removeClass('i-pseudo-class')// 伪元素颜色
                        $(item).find('.i-date-picker').removeClass('i-border-col i-border-shadow')// 边框和阴影颜色
                        $(item).find('.date-calendar-box').html('')// 日历消失
                    })
                },
                colorShow: function () {
                    _this.eventsObj.colorHide()
                    _this.$inputBox.addClass('i-pseudo-class')
                    _this.$inputBox.children('input').addClass('i-border-col i-border-shadow').focus()

                },
                calendarShow: function (e) {
                    e.stopPropagation()
                    _this.eventsObj.colorShow()
                    _this.eventsObj.calendarBoxHTML()

                },

                calendarBoxHTML: function () {
                    var html = '' +
                        '<div class="date-calendar-box"><div class="calendar-box">' +
                        '<div class="calendar-head"></div>' +
                        '<div class="calendar-body"></div>' +
                        '<div class="calendar-foot"></div>' +
                        '</div></div>';

                    _this.$calendarBox.html(html)
                }
            }// return
        },// events
    };// prototype

























    $.fn.iCalendar = function (options) {
        return new Calendar(options)
    };// $.fn

    // 初始化input.i-date-picker
    var $calendars = $('input[data-calendar=true]');
    $calendars.each(function (index, item) {
        $(item).iCalendar(item)
    })

    // 使用laydate, 点击以后清除 .i-date-picker 的样式
    $('body').on('click', '.laydate-btns-clear', function () {
        console.log($(this))
    })

}($, window);