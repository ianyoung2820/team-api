test('Test for ian', async () => {
    const response = await fetch('http://localhost:3000/ian');
    const name = await response.text();
    expect(name).toBe('ian');
});