const fetch = require('node-fetch2');

test('Test for /david endpoint' , async () => {
    const response = await fetch('http://localhost:3000/david');
    const name = await response.text();
    expect(name).toBe("Hello David");
});