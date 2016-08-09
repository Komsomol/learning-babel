var app = {
	vars:{
		url:'https://www.reddit.com/r/videos.json',
		num: 1,
		num2:2
	},
	init:()=>{
		console.log('YOLOes2015');
		
		app.checkVars();
		let user = "getting data";

		// template strings you have to use backticks
		console.log(`${user} from ${app.vars.url} `);

		console.log(`${app.vars.num} + ${app.vars.num2} `);

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
		videoData.filter(function(c,p,i){
			console.log(c.data.domain, p);
		})
	},

	checkVars:()=>{
		return app.vars;
	},
};

app.init();