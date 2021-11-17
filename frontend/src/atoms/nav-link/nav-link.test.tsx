import 'regenerator-runtime/runtime';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NavLink from './index';

describe("<NavLink />", () => {
  test("should have a label Click Me", async () => {
    const { findByTestId } = render(<BrowserRouter><NavLink url='/' testid='navlink' label='Click Me'/></BrowserRouter>);
    const navlink = await findByTestId('navlink');
    expect(navlink.textContent).toBe('Click Me');
  });
  test("should have a href /link", async () => {
    const { findByTestId } = render(<BrowserRouter><NavLink url='/link' testid='navlink' className='primary' label='Click Me'/></BrowserRouter>);
    const navlink = await findByTestId('navlink');
    expect(navlink.getAttribute('href')).toBe('/link');
  });
  test("should have an active class when in active state", async () => {
    const { findByTestId } = render(<BrowserRouter><NavLink url='/link' testid='navlink' isActive label='Click Me'/></BrowserRouter>);
    const navlink = await findByTestId('navlink');
    expect(navlink.className.includes('active')).toBe(true);
  });
  test("should have a class passed by className", async () => {
    const { findByTestId } = render(<BrowserRouter><NavLink url='/link' testid='navlink' className='className' label='Click Me'/></BrowserRouter>);
    const navlink = await findByTestId('navlink');
    expect(navlink.className.includes('className')).toBe(true);
  });
});