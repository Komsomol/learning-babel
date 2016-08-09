var app = {
	vars:{
		url:'https://www.reddit.com/r/videos.json'
	},
	init:()=>{
		console.log('YOLOes2015');
		
		app.checkVars();
		let user = "getting data";
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
		let videoData = data.data.children;
		console.log(videoData);
		videoData.filter(function(currentValue,p,i){
			if((currentValue.data.domain == 'youtube.com') || (currentValue.data.domain == 'm.youtube.com') || (currentValue.data.domain == 'youtu.be') ){
				console.log(currentValue.data.url);
			}
		})

	},

	checkVars:()=>{
		return app.vars;
	},
};

app.init();