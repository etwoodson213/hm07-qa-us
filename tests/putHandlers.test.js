// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Status Code                                  ||
// ! ||--------------------------------------------------------------------------------||

const config = require('../config');

const requestBody = {
	"name": "pizza",
  "price": 10,
  "weight": 15,
  "units": "Units.kg",
  "category": "food"
}

test('Should return status code 200...', async () => {
	let actualStatusCode
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
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
// ! ||                                      Body                                      ||
// ! ||--------------------------------------------------------------------------------||

test('Body should contain...', async () => {
	let actualResponseBody
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
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