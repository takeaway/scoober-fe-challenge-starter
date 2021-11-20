import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';

import Layover from './index';

describe("<Layover />", () => {
  test(`should have contain child component in inner html`, () => {
    const { container } = render(<Layover><span></span></Layover>);
    expect(container.innerHTML).toBe(`<div class=\"flex bg-layover w-full h-full absolute items-center justify-center left-[0] top-[0]\"><span></span></div>`);
  });
});