it('Test for david', async () => {
    const response = await fetch('http://localhost:3000/david');
    const name = await response.text();
    expect(name).toBe("david");
});