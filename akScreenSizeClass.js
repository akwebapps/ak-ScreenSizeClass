/*! akScreenSizeClass v1.0.1 2020-01-23 | https://github.com/akwebapps/ak-ScreenSizeClass | (c) 2020 AK Web Apps | Licensed MIT */
(function ( $ ) {
	var bodySizeClass;
	$.akScreenSizeClass = function(param) {
		if(param=="set"){
			bodySizeClass=$.akScreenSizeClass();
			$("body").removeClass("body-xs body-sm body-md body-lg body-xl").addClass(bodySizeClass);
			return;
		} else {
			var w=$(window).width();
			bodyClass="body-xs";
			if(w>=1200) bodyClass="body-xl";
			else if(w>=992) bodyClass="body-lg";
			else if(w>=768) bodyClass="body-md";
			else if(w>=576) bodyClass="body-sm";
			if( bodyClass!=bodySizeClass ) $(document).trigger("sizeClassChanged",{"class":bodyClass,"width":w});
			return (param=="width")?w:bodyClass;
		}
	};
	$.akScreenSizeClass("set");
	$(window).on("resize", function () {
		$.akScreenSizeClass("set");
	});
})(jQuery);