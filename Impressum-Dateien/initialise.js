/*** function ***/

jQuery(document).ready(function () {

	// get current user agent
	var userAgent = navigator.userAgent.toLowerCase();
	// if android exits index > -1 will be returned
	var isAndroid = userAgent.indexOf("android") > -1;
	// if isAndroid == true then our double tab script will be executed
	if (isAndroid === true && navigator.maxTouchPoints > 0) {
		Common.doubleTapToGo("#cm_navigation li:has(ul)");
		Common.doubleTapToGo("#nav-mobile-heading");
	}

	window.onscroll = function () { naviScrollFixed() };

	var header = document.getElementById("navigation_background");
	var sticky = header.offsetTop;

	function naviScrollFixed() {
		if (window.pageYOffset > sticky) {
			header.classList.add("cm-template-navigation--position-fixed");
		} else {
			header.classList.remove("cm-template-navigation--position-fixed");
		}
	}

	//cm-empty - hide empty container
	function setCmEmptyForElements(element, hiddenElement) {
		if (jQuery(element).hasClass('cm_empty')) {
			if (hiddenElement == undefined) {
				jQuery(element).addClass('cm-templates-empty');
			} else {
				jQuery(hiddenElement).addClass('cm-templates-empty');
			}
		}
	}


	// remove cm_empty container
	setTimeout(function () {

		setCmEmptyForElements('#logo');
		setCmEmptyForElements('#keyvisual');
		setCmEmptyForElements('#title');
		setCmEmptyForElements('#subtitle');
		setCmEmptyForElements('#title_wrapper');
		setCmEmptyForElements('#widgetbar_site_1');
		setCmEmptyForElements('#widgetbar_page_1');
		setCmEmptyForElements('#widgetbar_site_2');
		setCmEmptyForElements('#widgetbar_page_2');
		setCmEmptyForElements('#content_sidebar');
		setCmEmptyForElements('#footer');
		setCmEmptyForElements('#footer_wrapper');

		if (jQuery('#content_sidebar').find('div.sidebar').length == jQuery('#content_sidebar').find('div.cm_empty').length) {
			jQuery('#content_main').css({ 'width': '100%' });
		}
		if (jQuery('#navigation_wrapper').find('div#logo').length == jQuery('#navigation_wrapper').find('div.cm_empty').length) {
			jQuery('#cm_navigation').css({ 'width': '100%', 'text-align': 'center' });
			jQuery('#cm_navigation>ul').css({ 'width': '100%', 'display': 'block' });
		}
		if (jQuery('#title_wrapper').find('[class*="title"]').length == jQuery('#title_wrapper').find('.cm_empty').length) {
			jQuery('#header_wrapper').css("display", "none");
			jQuery('#keyvisual_wrapper').css({ 'padding': '0px' });
		}

	}, 100);
});


var Boron = Boron || {};

Boron.setAnimation = function () {
	jQuery('#cm_navigation > ul > li.cm_has_subnavigation, #cm_navigation > ul > li > ul > li.cm_has_subnavigation').mouseenter(function (e) {
		jQuery(this).children('ul').css('display', 'none');
		jQuery(this).children('ul').stop(true, true).slideDown(function () {
			jQuery(this).css('overflow', '');
		});
	});
	jQuery('#cm_navigation > ul > li.cm_has_subnavigation, #cm_navigation > ul > li > ul > li.cm_has_subnavigation').mouseleave(function (e) {
		jQuery(this).children('ul').css('display', 'block');
		jQuery(this).children('ul').stop(true, true).slideUp(200, function () {
			jQuery(this).css('display', '');
			jQuery(this).css('overflow', '');
		});
	});
}


jQuery(document).ready(function () {
	jQuery('#nav-mobile-heading > a').html(jQuery('#cm_navigation>ul>li.cm_current>a').html());
	Boron.setAnimation();
});

jQuery(document).ready(function () {

	(function () {
		if (window.beng.env.mode != "edit") {
			var rgx = /^\s*$/;
			var hide = false;

			$w("#title #subtitle").each(function (x) {
				if (rgx.test(jQuery(x).text())) {
					jQuery(x).hide();
					hide = true;
				}
			});

			if (hide) {
				jQuery("#title_separator_normal,#title_separator_mobile").hide();
			}
		}
	})();

});