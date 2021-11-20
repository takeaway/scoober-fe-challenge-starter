import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';

import Footer from './index';

describe("<Footer />", () => {
  test(`should have footer template`, () => {
    const { container } = render(<Footer/>);
    expect(container.innerHTML).toBe(`<footer class=\"container flex flex-col md:flex-row items-center w-full md:h-9 bg-primary text-white p-2 justify-between\" data-testid=\"footer\"><img class=\"h-5\" src=\"test-file-stub\" alt=\"logo\"><div class=\"flex flex-col justify-center md:flex-row md:mt-[0] mt-2\"><small class=\"text-white text-center text-sm md:mr-5 mb-2 md:mb-[0]\">Cookie Statement</small><small class=\"text-body text-center text-sm\">© 2021 Takeaway.com</small></div></footer>`);
  });
});