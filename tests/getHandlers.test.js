// ! ||--------------------------------------------------------------------------------||
// ! ||                                     Status                                     ||
// ! ||--------------------------------------------------------------------------------||
const config = require('../config');

//test = describe what the test should be doing
test('Should return status code 200...', async () => {
	let actualStatusCode;
	try {
		//fetching data from url placed in config.js - added endpoint from postman
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`);
		actualStatusCode = response.status;
	} catch (error) {
		//this prints the error to the console if there is a error present
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

// ! ||--------------------------------------------------------------------------------||
// ! ||                                      Body                                      ||
// ! ||--------------------------------------------------------------------------------||

test('Body should contain...', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe("For movies and series");
});
