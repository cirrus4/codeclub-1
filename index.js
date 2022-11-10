export default {
	fetch(request) {
		let output = 'Hello worker!';
		const method = request.method;
		const responseOptions = {headers: {'content-type': 'text/plain',}};

		if(method == 'POST'){
			output = {body: 'Hello POST Worker!' };
			responseOptions.headers = {'content-type': 'application/json;charset=UTF-8'}
			output = JSON.stringify(output);
		}else if(method == 'GET'){
			output = 'Hello GET Worker!';
		}

		return new Response(output, responseOptions);
	},
};
