/*! akScreenSizeClass v1.0.1 2020-01-23 | https://github.com/akwebapps/ak-ScreenSizeClass | (c) 2020 AK Web Apps | @license Licensed MIT */
(function ( $ ) {
	var akScreenSizeDefaults={
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200
	}, bodySizeClass;
	$.akScreenSizeClass = function(actionStr, params) {
		var params=$.extend({},akScreenSizeDefaults,params);
		if(actionStr=="set"){
			if(params) akScreenSizeDefaults=params;
			bodySizeClass=$.akScreenSizeClass();
			$("body").removeClass("body-xs body-sm body-md body-lg body-xl").addClass(bodySizeClass);
			return;
		} else {
			var w=$(window).width();
			bodyClass="body-xs";
			if(w>=params.xl) bodyClass="body-xl";
			else if(w>=params.lg) bodyClass="body-lg";
			else if(w>=params.md) bodyClass="body-md";
			else if(w>=params.sm) bodyClass="body-sm";
			if( bodyClass!=bodySizeClass ) $(document).trigger("sizeClassChanged",{"class":bodyClass,"width":w});
			return (actionStr=="width")?w:bodyClass;
		}
	};
	$.akScreenSizeClass("set");
	$(window).on("resize", function () {
		$.akScreenSizeClass("set");
	});
})(jQuery);