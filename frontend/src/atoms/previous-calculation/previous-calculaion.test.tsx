import 'regenerator-runtime/runtime';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PreviousCalculation from './index';

describe("<PreviousCalculation />", () => {
  test("should have a label Hello", async () => {
    const { findByTestId } = render(<PreviousCalculation testid='testid' label='Hello'/>);
    const prev = await findByTestId('testid');
    expect(prev.textContent).toBe('Hello');
  });
  test("should have a class text-left when alignRight is absent", async () => {
    const { findByTestId } = render(<PreviousCalculation testid='testid' label='Hello'/>);
    const prev = await findByTestId('testid');
    expect(prev.className.includes('text-left')).toBe(true);
  });
  test("should have a class text-right when alignRight is present", async () => {
    const { findByTestId } = render(<PreviousCalculation alignRight testid='testid' label='Hello'/>);
    const prev = await findByTestId('testid');
    expect(prev.className.includes('text-right')).toBe(true);
  });
  test(`should have a template <span class=\"previous-calcualtion text-left\ ">Hello</span>`, async () => {
    const { container } = render(<PreviousCalculation label='Hello' className='abc'/>);
    expect(container.innerHTML).toBe(`<span class=\"previous-calcualtion text-left abc\">Hello</span>`);
  });
});
