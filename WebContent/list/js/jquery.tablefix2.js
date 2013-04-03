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

			// テーブルの分割と初期化
                        var tfix = baseTable;
                        var tflex = baseTable.clone();
                        
			var fixTable = tfix.wrap('<div></div>');
			var flexTable = tflex.wrap('<div></div>');


			var fixDiv = fixTable.parent().css({position: "absolute", overflow: "hidden", width: "100px"});
			var flexDiv = flexTable.parent().css({position: "absolute", overflow: "auto", width: "200px", left: "100px"});
                        

			div.append(fixDiv).append(flexDiv);


			// スクロール連動
			tfix.scroll(function() {
				tfix.scrollTop(tflex.scrollTop());
			});

		});
	}
})(jQuery);
