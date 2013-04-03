/*
 * jQuery TableFix plugin ver 1.0.0
 * Copyright (c) 2010 Otchy
 * This source file is subject to the MIT license.
 * http://www.otchy.net
 */
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
