import 'regenerator-runtime/runtime';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PreviousSelection from './index';

describe("<PreviousSelection />", () => {
  test("should have a label Hello", async () => {
    const { findByTestId } = render(<PreviousSelection testid='testid' label='Hello'/>);
    const prev = await findByTestId('testid');
    expect(prev.textContent).toBe('Hello');
  });
  test("should have a class bg-primary when isSecondary is absent", async () => {
    const { findByTestId } = render(<PreviousSelection testid='testid' label='Hello'/>);
    const prev = await findByTestId('testid');
    expect(prev.className.includes('bg-primary')).toBe(true);
  });
  test("should have a class bg-secondary when isSecondary is present", async () => {
    const { findByTestId } = render(<PreviousSelection isSecondary testid='testid' label='Hello'/>);
    const prev = await findByTestId('testid');
    expect(prev.className.includes('bg-secondary')).toBe(true);
  });
  test(`should have a template <span class=\"previous-calcualtion text-left\">Hello</span>`, async () => {
    const { container } = render(<PreviousSelection label='Hello' className='abc'/>);
    expect(container.innerHTML).toBe(`<span class=\"text-white rounded-full text-2xl h-[60px] w-[60px] flex items-center justify-center bg-primary abc\">Hello</span>`);
  });
});
