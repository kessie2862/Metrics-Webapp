const mockFetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ coins: [] }),
}));

export default mockFetch;

test('Some random dummy test!!', () => {
  expect(true).toBe(true);
});
