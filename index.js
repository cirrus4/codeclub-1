function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



export default {
	fetch(request) {
		let output = 'Hello worker!';
		const method = request.method;
		const responseOptions = {headers: {'content-type': 'text/plain',}};

		const answersGet = {
		  0: 'this is zero text',
		  1: 'my first line',
		  2: 'my random text #2',
		  3: 'last text snippet'
		};
		
		if(method == 'POST'){
			output = {body: 'Hello POST Worker!' };
			responseOptions.headers = {'content-type': 'application/json;charset=UTF-8'}
			output = JSON.stringify(output);
		}else if(method == 'GET'){
			output = 'Hello GET Worker! and some random text:' + answersGet[getRandomInt(4)];
		}

		return new Response(output, responseOptions);
	},
};
