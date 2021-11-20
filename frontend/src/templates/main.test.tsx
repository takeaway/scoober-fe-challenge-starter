import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';

import Main from './main';

describe("<Layover />", () => {
  test(`should contain header, footer and child component in inner html`, () => {
    const { container } = render(<Main headerMessage='Hello'><span>Some Content</span></Main>);
    expect(container.innerHTML).toBe(`<header class=\"container flex items-center w-full bg-brand h-9 px-2 shadow-md\" data-testid=\"header\"><img class=\"h-5 w-5 mr-2\" src=\"test-file-stub\" alt=\"logo\"><p class=\"text-white text-lg leading-[1.2]\">Hello<br><small class=\"text-sm\">Win the game or win the job</small></p></header><main class=\"container relative bg-body\" data-testid=\"main-template\"><span>Some Content</span></main><footer class=\"container flex flex-col md:flex-row items-center w-full md:h-9 bg-primary text-white p-2 justify-between\" data-testid=\"footer\"><img class=\"h-5\" src=\"test-file-stub\" alt=\"logo\"><div class=\"flex flex-col justify-center md:flex-row md:mt-[0] mt-2\"><small class=\"text-white text-center text-sm md:mr-5 mb-2 md:mb-[0]\">Cookie Statement</small><small class=\"text-body text-center text-sm\">© 2021 Takeaway.com</small></div></footer>`);
  });
});