// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"ok": true
};

test('Should return status 200...', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

// ! ||--------------------------------------------------------------------------------||
// ! ||                                  Request Body                                  ||
// ! ||--------------------------------------------------------------------------------||

test('Body should contain...', async () => {
	let actualResponseBody;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	
	expect(actualResponseBody.ok).toBe(true);
});