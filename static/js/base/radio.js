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