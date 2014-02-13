;(function() {

	var rulers = $('<div id="dr-wrapper"></div>');
	var corner = $('<div id="dr-corner"></div>');
	var rulerH = $('<div id="dr-ruler-h" class="dr-ruler"></div>');
	var rulerV = $('<div id="dr-ruler-v" class="dr-ruler"></div>');
	var linesH = $('<div id="dr-lines-h"></div>');
	var linesV = $('<div id="dr-lines-v"></div>');

	function refreshGrid() {
		linesH.empty();
		linesV.empty();

		var w = $(window).width();
		var h = $(window).height();
		for(var i = 10; i <= w; i+=10) {
			linesV.append('<div class="dr-line" style="left:'+i+'px"></div>');
		}
		for(var i = 10; i <= h; i+=10) {
			linesH.append('<div class="dr-line" style="top:'+i+'px"></div>');
		}
	}

	rulers.append(corner, rulerH, rulerV, linesH, linesV);
	refreshGrid();

	$(document).on('click', '#dr-ruler-h, #dr-corner', function() {
		rulers.find('#dr-lines-v').toggle();
	});
	$(document).on('click', '#dr-ruler-v, #dr-corner', function() {
		rulers.find('#dr-lines-h').toggle();
	});
	$(window).on('resize', refreshGrid);

	var css = '<style type="text/css">\
#dr-wrapper {\
	position: fixed;\
	top: 0;\
	left: 0;\
	width: 100%;\
	height: 100%;\
	overflow: hidden;\
}\
#dr-wrapper .dr-ruler {\
	display: block;\
	position: absolute;\
	top: 0;\
	left: 0;\
	width: 100%;\
	height: 100%;\
	cursor: pointer;\
	background: rgba(0, 0, 0, 0.1);\
	z-index: 9999;\
}\
#dr-wrapper .dr-ruler:hover {\
	background: rgba(0, 0, 0, 0.3);\
}\
#dr-wrapper .dr-ruler#dr-ruler-h {\
	height: 10px;\
	left: 10px;\
}\
#dr-wrapper .dr-ruler#dr-ruler-v {\
	width: 10px;\
	top: 10px;\
}\
#dr-wrapper #dr-corner {\
	display: block;\
	position: absolute;\
	top: 0;\
	left: 0;\
	width: 10px;\
	height: 10px;\
	cursor: pointer;\
	background: rgba(0, 0, 0, 0.2);\
	z-index: 9999;\
}\
#dr-wrapper #dr-corner:hover {\
	background: rgba(0, 0, 0, 0.4);\
}\
#dr-wrapper .dr-line {\
	display: block;\
	position: absolute;\
	left: 0;\
	top: 0;\
	width: 100%;\
	height: 100%;\
	background: rgba(0, 0, 0, 0.1);\
}\
#dr-wrapper .dr-line:nth-child(10n) {\
	background: rgba(0, 0, 0, 0.3);\
}\
#dr-wrapper #dr-lines-h,\
#dr-wrapper #dr-lines-v {\
	display: block;\
	position: absolute;\
	top: 0;\
	left: 0;\
	width: 100%;\
	height: 100%;\
	display: none;\
	z-index: 9998;\
}\
#dr-wrapper #dr-lines-h .dr-line {\
	height: 1px;\
}\
#dr-wrapper #dr-lines-v .dr-line {\
	width: 1px;\
}\
</style>';

	$('body').append(css, rulers);

})();