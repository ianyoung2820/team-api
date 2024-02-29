const fetch = require('node-fetch2');

test('Test for /ian endpoint', async () => {
    const response = await fetch('http://localhost:3000/ian');
    const name = await response.text();
    expect(name).toBe('Hello Ian');
});