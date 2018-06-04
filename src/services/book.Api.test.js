import { checkResponseData } from './booksApi';

describe('search response', () => {

  it('returns json if Response is "true"', () => {
    const data = { Response: 'True' };
    const output = checkResponseData(data);
    expect(output).toBe(data);
  });

  it('throws an error with data.Error if Response is False', () => {
    const data = { Response: 'False', Error: 'This is the error' };
    expect(() => {
      checkResponseData(data);
    }).toThrow(data.Error);
  });
});