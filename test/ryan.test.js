const fetch = require('node-fetch2');

test('Test for /ryan endpoint', async () => {
    const response = await fetch('http://localhost:3000/ryan');
    const name = await response.text();
    expect(name).toBe('Hello ryan');
});