const fs = require('fs');
const path = require('path');
const Mock = require('mockjs');
const JSON5 = require('json5');

function getJsonDataFrom(file){
	let jsonStr = fs.readFileSync(path.resolve(__dirname, file), 'utf-8');
	return JSON5.parse(json);
}

module.exports = function(app){
	if(process.env.MOCK == 'true'){

		app.get('/rest/routes', function(req, res){
			let json = getJsonDataFrom('../json/menu.json5');
			res.json(Mock.mock(json));
		})

	}
}
