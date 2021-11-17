import 'regenerator-runtime/runtime';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './index';

describe("<Button />", () => {
  test("should have a label Click Me", async () => {
    const { findByTestId } = render(<Button testid='button' label='Click Me'/>);
    const button = await findByTestId('button');
    expect(button.textContent).toBe('Click Me');
  });
  test("should have a className primary", async () => {
    const { findByTestId } = render(<Button testid='button' className='primary' label='Click Me'/>);
    const button = await findByTestId('button');
    expect(button.className).toBe('primary');
  });
  test("should have fire onClick handled on click event", async () => {
    let buttonWasClicked = false;
    function handleClick() {
      buttonWasClicked = true;
    }

    const { findByTestId } = render(<Button testid='button' onClick={handleClick} label='Click Me'/>);
    const button = await findByTestId('button');
    fireEvent.click(button)
    expect(buttonWasClicked).toBe(true);
  });
});