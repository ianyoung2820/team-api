const fetch = require('node-fetch2');

test('Test for /mosiah endpoint', async () => {
    const response = await fetch('http://localhost:3000/mosiah');
    const name = await response.text();
    expect(name).toBe('Hello Mosiah');
});