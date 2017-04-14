$(function () {

    $(".svg").on('mouseover', '.area', function () {
        path_hover($(this), 0)
    }).on('mouseleave', '.area', function () {
        path_hover($(this), 1)
    }).on('mouseover', 'image,text', function () {
        text_hover($(this), 0)
    }).on('mouseleave', 'image,text', function () {
        text_hover($(this), 1)
    }).on('click', "[data-target]", function () {
        var area = $(this).data("target")
        switch (area) {
            case 'chenghua':
                window.open("/map/location?sh[center]=104.101255,30.660122");
                break;
            case 'wuhou':
                window.open("/map/location?sh[center]=104.04339,30.641982");
                break;
            case 'jinniu':
                window.open("/map/location?sh[center]=104.052236,30.691359");
                break;
            case 'jinjiang':
                window.open("/map/location?sh[center]=104.080989,30.657689");
                break;
            case 'qingyang':
                window.open("/map/location?sh[center]=104.062499,30.674406");
                break;
            case 'pixian':
                window.open("/map/location?sh[center]=103.907847,30.808386");
                break;
            case 'wenjiang':
                window.open("/map/location?sh[center]=103.856646,30.682203");
                break;
            case 'xindu':
                window.open("/map/location?sh[center]=104.158705,30.823499");
                break;
            case 'longquanyi':
                window.open("/map/location?sh[center]=104.274632,30.556507");
                break;
            case 'shuangliu':
                window.open("/map/location?sh[center]=103.923588,30.574488");
                break;
        }
    })

    var color = ['rgba(0, 0, 0, .6)', 'rgba(0, 0, 0, .5)']
    var textcolor = ['#25f1ff', '#fff']

    // 文字图片 hover 效果
    function text_hover($this, type) {
        if (!$($this.data('target')))
            return
        var $id = $("#svg").find("path[data-target=" + $this.data('target') + "]")
        $this.css('fill', textcolor[type])
        $id.css('fill', color[type])
    }

    // 图形区域hover
    function path_hover($this, type) {
        var $id = $("#text_" + $this.data("target"))
        $this.css('fill', color[type])
        $id.css('fill', textcolor[type])
    }

})
/*
 * 时间
 * */
$(function () {

    function clock() {
        var d = new Date();
        var d_str = d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + two(d.getDate()) + "日 ";
        var t_str = two(d.getHours()) + ':' + two(d.getMinutes()) + ":" + two(d.getSeconds());
        $('#time').find('span').text(d_str);
        $('#time').find('time').text(t_str);
        setTimeout(clock, 1000)
    }

    function two(d) {
        if (d < 10) {
            return "0" + d
        } else {
            return d
        }
    }

    clock()
})

$(function () {
    var bl = 1

    function calc() {
        $("#svg").height($("#svg").width() / bl)
    }

    $(window).resize(function () {
        calc()
    })
    calc()
})