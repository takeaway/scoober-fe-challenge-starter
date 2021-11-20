import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';

import Header from './index';

describe("<Header />", () => {
  test(`should have header template`, () => {
    const { container } = render(<Header message='Test'/>);
    expect(container.innerHTML).toBe(`<header class=\"container flex items-center w-full bg-brand h-9 px-2 shadow-md\" data-testid=\"header\"><img class=\"h-5 w-5 mr-2\" src=\"test-file-stub\" alt=\"logo\"><p class=\"text-white text-lg leading-[1.2]\">Test<br><small class=\"text-sm\">Win the game or win the job</small></p></header>`);
  });
});