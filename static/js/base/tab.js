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