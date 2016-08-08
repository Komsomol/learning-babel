var app = {
	vars:{
		url:'https://www.reddit.com/r/videos.json'
	},
	init:()=>{
		console.log('YOLOes2015');
		
		app.checkVars();
		let user = "getting data";

		// template strings you have to use backticks
		console.log(`${user} from ${app.vars.url}`);

		app.getData(app.vars.url, function(data){
			app.processData(data);
		});
	},
	getData:(url, callback)=>{
		fetch(url).then(function(response, method){
			if(response.status == 200){
				return response.json();
			} else {
				console.log('No API Response');
			}
		}).then(function(jsonObject){
			// after = next page if added to URL e.g. ?after=XXXXX
			callback(jsonObject);
		});
	},
	processData:(data)=>{
		console.log(data);
		let videoData = data.children;
		console.log(videoData);
	},
	checkVars:()=>{
		return app.vars;
	},
};

app.init();