// add fontAwesome from cm4all cdn if not available in editor
(function () {
	var fontAwesomeResource = document.querySelector('link[href*="/font-awesome."]');
	if (!fontAwesomeResource && Common) {
		Common.loadCss('https://c4t.cc/pool/font-awesome/4.7.0/css/font-awesome.min.css', 'top');
	}
})();
