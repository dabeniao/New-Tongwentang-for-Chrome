setTimeout(function () {
	var cnt = 0;
	function reTry() {
		if (typeof TongWen == "undefined") {
			if (cnt++ > 100) return;
			setTimeout(reTry, 100);
		} else {
			TongWen.trans2Trad(document);
		}
	};
	reTry();
}, 100);