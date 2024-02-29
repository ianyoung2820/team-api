test('Test for mosiah', async () => {
    const response = await fetch('http://localhost:3000/mosiah');
    const name = await response.text();
    expect(name).toBe('mosiah');
});