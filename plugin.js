(function(){

	var options = INSTALL_OPTIONS;

	if (!options.websiteId) {
		return;
	}

	window.CRISP_WEBSITE_ID = options.websiteId;
	d=document;
	s=d.createElement("script");
	s.src="https://client.crisp.im/l.js";
	s.async=1;
	d.getElementsByTagName("head")[0].appendChild(s);

})();
