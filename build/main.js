'use strict';

var app = {
	vars: {
		url: 'https://www.reddit.com/r/videos.json'
	},
	init: function init() {
		console.log('YOLOes2015');

		app.checkVars();
		var user = "getting data";

		// template strings you have to use backticks
		console.log(user + ' from ' + app.vars.url);

		app.getData(app.vars.url, function (data) {
			app.processData(data);
		});
	},
	getData: function getData(url, callback) {
		fetch(url).then(function (response, method) {
			if (response.status == 200) {
				return response.json();
			} else {
				console.log('No API Response');
			}
		}).then(function (jsonObject) {
			// after = next page if added to URL e.g. ?after=XXXXX
			callback(jsonObject);
		});
	},
	processData: function processData(data) {
		console.log(data);
		var videoData = data.children;
		console.log(videoData);
	},
	checkVars: function checkVars() {
		return app.vars;
	}
};

app.init();