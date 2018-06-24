$(document).ready(function () {
    toolbar = '<div id="sideToolbar" style="display:none;">\
                <div class="sideCatalogBg" id="sideCatalog">\
                  <div id="sideCatalog-sidebar">\
                    <div class="sideCatalog-sidebar-top">\
                    </div>\
                    <div class="sideCatalog-sidebar-bottom">\
                    </div>\
                  </div>\
                  <div id="sideCatalog-catalog">\
                    <ul class="nav" style="width:305px;zoom:1">\
                    </ul>\
                  </div>\
                </div>\
                <a href="javascript:void(0);" id="sideCatalogBtn" class="sideCatalogBtnDisable"></a>\
                <a href="javascript:void(0);" id="sideToolbar-up"></a>\
              </div>',
         catalog_item = '',
        l = 1, m = 1, n = 1,
        s = $('#touslescours'); //#cnblogs_post_body是正文内容div
    if (s.length === 0) {
        return
    }
    ;
    $('body').append(toolbar);
    headers = s.find(':header'); //查找正文内所有标题 h1~h6
    catalog_item += '<li><span style="font-size: 14pt; font-weight: bold;">Les Cours</span></li>';
    headers.each(function () { //遍历所有的header
        var xheader = $(this), //当前的header的对象
            v = xheader[0];

        var text = xheader.text();

        xheader.attr('id', 'autoid-' + l + '-' + m + '-' + n)

        if (v.localName === 'h2') {
            level1 = l + '.';
            
            catalog_item += '<li><a href="#' + xheader.attr('id') + '" title="' + text + '">' +  text + '</a><span class="sideCatalog-dot pointer"></span></li>';
            l++;
        }
    });
    $('#sideCatalog-catalog>ul.nav').html(catalog_item);
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh');
	});
    $('body').scrollspy({
        offset: 50,
        target: '.sideCatalogBg'
    });

    $('body').on('activate.bs.scrollspy', function () {
        $("ul.nav li.active span").toggleClass("highlight");
    });

    $sideCatelog = $('#sideCatalog');
    $('#sideCatalogBtn').on('click', function () {
        if ($(this).hasClass('sideCatalogBtnDisable')) {
            $sideCatelog.css('visibility', 'hidden');
			$("#sideToolbar").css("z-index",0);
        } else {
            $sideCatelog.css('visibility', 'visible');
			$("#sideToolbar").css("z-index",999);
        }
        $(this).toggleClass('sideCatalogBtnDisable');
    });


    $('#sideToolbar-up').on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    //希望在sidebar加载完后，在下方空白的地方才显示目录
    //博客园的sidebar也是JS加载，测试时发现在其加载完之前，下面的sidebar_height就已经计算了，导致误差。所以加了延迟1秒
    setTimeout(function () {
        //sidebar_height = $('#touslescours').offset().top;
		sidebar_height = $('#touslescours').offset().top;
		sidebar_low = $('#Biblio').offset().top;
        $sideToolbar = $('#sideToolbar');
        $(document).on('scroll', function () {
            var t = $(document).scrollTop();
            if (t > sidebar_height) {
                $sideToolbar.css('display', 'block')
            } else {
                $sideToolbar.css('display', 'none')
            }
        })
    }, 1000);
});