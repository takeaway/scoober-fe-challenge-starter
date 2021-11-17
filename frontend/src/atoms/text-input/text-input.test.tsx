import 'regenerator-runtime/runtime';
import React, { FormEvent } from 'react';
import { render, fireEvent } from '@testing-library/react';

import TextInput from './index';

describe("<TextInput />", () => {
  let inputValue = '';
  function handleChange(event: FormEvent<HTMLInputElement>) {
    inputValue = event.currentTarget.value;
  }
  const textInput = (inputVal: string) => <TextInput testid='text-input' className='text-input-class' onChange={handleChange} value={inputVal} label='Input Label' />

  test("should have a label Input Label", async () => {
    const { findByTestId } = render(textInput(''));
    const input = await findByTestId('text-input');
    expect(input.querySelector('label')?.textContent).toBe('Input Label');
  });
  test("should not have a floating class in label for empty input", async () => {
    const { findByTestId } = render(textInput(''));
    const input = await findByTestId('text-input');
    expect(input.querySelector('label')?.className.includes('floating')).toBe(false);
  });
  test("should have a className='text-input-class'", async () => {
    const { findByTestId } = render(textInput('Hello'));
    const input = await findByTestId('text-input');
    expect(input.className.includes('text-input-class')).toBe(true);
  });
  test("should have a input element with value Hello", async () => {
    const { findByTestId } = render(textInput('Hello'));
    const input = await findByTestId('text-input');
    expect(input.querySelector('input')?.value).toBe('Hello');
  });
  test("should have fire onChange handled on click event", async () => {
    const { findByTestId } = render(textInput(''));
    const input = await findByTestId('text-input');
    const inputElement = input.querySelector('input');
    if(inputElement) {
      fireEvent.change(inputElement, { target: { value: 'Bye' } })
      expect(inputValue).toBe('Bye');
    } else {
      expect(false).toBe(true);
    }
  });
  test("label should have floating class when input is focussed", async () => {
    const { findByTestId } = render(textInput(''));
    const input = await findByTestId('text-input');
    const inputElement = input.querySelector('input');
    const labelElement = input.querySelector('label');
    if(inputElement && labelElement) {
      fireEvent.focusIn(inputElement)
      expect(labelElement.className.includes('floating')).toBe(true);
      fireEvent.focusOut(inputElement)
      expect(labelElement.className.includes('floating')).toBe(false);
    } else {
      expect(false).toBe(true);
    }
  });
});