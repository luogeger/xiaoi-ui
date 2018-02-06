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