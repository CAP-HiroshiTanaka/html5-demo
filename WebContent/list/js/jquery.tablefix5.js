(function($){
	$.fn.tablefix = function(options) {
		return this.each(function(index){

			// 処理継続の判定
			var baseTable = $(this);

			// 外部 div の設定
			baseTable.wrap("<div></div>");
			var div = baseTable.parent();
			div.css({position: "relative"});


			// テーブルの分割と初期化
			var crossHeadTable = baseTable.wrap('<div></div>');
			var headTable = baseTable.clone().wrap('<div></div>');
                        var dataHeadTable = baseTable.clone().wrap('<div></div>');
                        var dataTable = baseTable.clone().wrap('<div></div>');
                        var crossFootTable = baseTable.clone().wrap('<div></div>');
                        var footTable = baseTable.clone().wrap('<div></div>');
/*
 75 <div id="tbody" style="position: absolute; overflow: hidden; width: 140px; height: 53px">
 76 <table id="scrollable2" cellspacing="0" cellpadding="0">
 77 <div id="tbody" style="position: absolute; overflow: hidden; width: 200px; height: 53px; left: 140px;">
 78 <table id="scrollable2" cellspacing="0" cellpadding="0">
 79 <div id="tbody" style="position: absolute; overflow: hidden; width: 140px; height: 200px; top: 53px; margin-bottom: -52px">
 80 <table id="scrollable2" cellspacing="0" cellpadding="0" style="margin-top: -53px; margin-bottom: -53px">
 81 <div id="tbody" style="position: absolute; overflow: auto; width: 200px; height: 200px; top: 53px; left: 140px; margin-bottom: -53">
 82 <table id="scrollable2" cellspacing="0" cellpadding="0" style="margin-top: -53px; margin-bottom: -53px"> 
 83 <div id="tbody" style="position: absolute; overflow: hidden; width: 140px; height: 53px; top: 253px;">
 84 <table id="scrollable2" cellspacing="0" cellpadding="0" style="margin-top: -573px;">
 85 <div id="tbody" style="position: absolute; overflow: hidden; width: 200px; height: 53px; top: 253px; left:140px;">
 86 <table id="scrollable2" cellspacing="0" cellpadding="0" style="margin-top: -573px;">
*/

                        /* Div の設定 */
			var crossHeadDiv = crossHeadTable.parent().css({position: "absolute", overflow: "hidden", width: "140px", height: "53px"});
			var headDiv = headTable.parent().css({position: "absolute", overflow: "hidden", width: "200px", height: "53px", left: "140px"});
                        var dataHeadDiv = dataHeadTable.parent().css({position: "absolute", overflow: "hidden", width: "140px", height: "200px", top: "53px", marginBottom: "-52px"});
                        var dataDiv = dataTable.parent().css({position: "absolute", overflow: "auto", width: "200px", height: "200px", top: "53px", left: "140px", marginBottom: "-53px"});
                        var crossFootDiv = crossFootTable.parent().css({position: "absolute", overflow: "hidden", width: "140px", height: "53px", top: "253px"});
                        var footDiv = footTable.parent().css({position: "absolute", overflow: "hidden", width: "200px", height: "53px", top: "253px", left: "140px"});

                        /* Table の設定 */
                        headTable.css({
                                marginLeft: '-140px'
                        });
			dataHeadTable.css({
				marginTop: '-53px',
				marginBottom: '-53px'
			});
			dataTable.css({
                                marginLeft: '-140px',
				marginTop: '-53px',
				marginBottom: '-53px'
			});
			crossFootTable.css({
				marginTop: '-573px'
			});
			footTable.css({
                                marginLeft: '-140px',
				marginTop: '-573px'
			});

                        $(dataHeadTable).find("tfoot").css({display: "none"})
                        $(dataTable).find("tfoot").css({display: "none"})

			div.append(crossHeadDiv).append(headDiv).append(dataHeadDiv).append(dataDiv).append(crossFootDiv).append(footDiv);


			// スクロール連動
			dataDiv.scroll(function() {
				headDiv.scrollLeft(dataDiv.scrollLeft());
				dataHeadDiv.scrollTop(dataDiv.scrollTop());
                                footDiv.scrollLeft(dataDiv.scrollLeft());
			});

		});
	}
})(jQuery);
