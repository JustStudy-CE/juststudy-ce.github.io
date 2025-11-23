(function(d, params, env, apiHost, hosts) {
	// set params
	(function(regex, qs, tokens) {
		regex = /[?&]?([^=]+)=([^&]*)/g;
		qs = d.location && d.location.search ? d.location.search.split('+').join(' ') : '';

		while ((tokens = regex.exec(qs))) {
			params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
		}
	})();

	if (typeof fg_api == "function" && typeof famobi != "undefined" && famobi instanceof fg_api) {
		// famobi api already loaded
		return false;
	}

	if (params.fg_domain && params.fg_uid && params.fg_pid) {
		env = params.fg_env || 'prod';
		apiHost = hosts[env];
		// load script
		(function (d, url, fgJS, firstJS) {
			fgJS = d.createElement('script');
			firstJS = d.getElementsByTagName('script')[0];
			fgJS.src = url
			firstJS.parentNode.insertBefore(fgJS, firstJS);
		})(d, "script/1f048013-f524-417c-8e90-92bb2e8ef33d/4638e320-4444-4514-81c4-d80a8c662371");
	}
})(document, {}, '', '', {
	'dev': 'api.dev', 
	'staging': 'api.staging.gc',
	'staging.aws': 'api.staging.aws',
	'staging.gc': 'api.staging.gc',
	'prod': 'api'
});