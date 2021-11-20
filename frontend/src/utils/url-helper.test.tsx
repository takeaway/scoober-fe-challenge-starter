import 'regenerator-runtime/runtime';

import { getQueryParams } from './url-helpers';

describe("getQueryParams", () => {
  test(`should return an object for query parameters`, () => {
    const search = `something?first=1&second=2`;
    const { first, second } = getQueryParams(search);
    expect(first).toBe('1')
    expect(second).toBe('2')
  });
});
