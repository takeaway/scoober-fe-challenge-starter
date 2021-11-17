import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './index';

describe("<Spinner />", () => {
  test(`should have a template <div class=\"spinner\"><div></div><div></div></div>`, async () => {
    const { container } = render(<Spinner/>);
    expect(container.innerHTML).toBe(`<div class=\"spinner\"><div></div><div></div></div>`);
  });
});