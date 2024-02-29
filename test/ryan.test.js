test('Test for ryan', async () => {
    const response = await fetch('http://localhost:3000/ryan');
    const name = await response.text();
    expect(name).toBe('ryan');
});