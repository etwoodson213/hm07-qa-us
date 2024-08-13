// eslint-disable-next-line no-undef
const config = require('../config');

test('Deleting a kit...', async () => {
	let kitDeleted;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
		kitDeleted = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);

});
