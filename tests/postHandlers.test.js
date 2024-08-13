// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Status Code                                  ||
// ! ||--------------------------------------------------------------------------------||
const config = require('../config');

const requestBody = {
			"productsList": [
    {
      "id": 5,
      "quantity": 2
    }
  ]
}

test('Should return status code 200...', async () => {
	let actualStatusCode
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Body Code                                   ||
// ! ||--------------------------------------------------------------------------------||

test('Body should contain...', async () => {
	let actualResponseBody
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe("Pasta");
});