import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as hooks from '../../redux/hooks';
import Authorize from './index';

describe("<Authorize />", () => {
  test("should show child component if user info is not present", () => {
    const useAppSelectorMock = jest.spyOn(hooks, 'useAppSelector');
    useAppSelectorMock.mockReturnValue({
      user: '',
      socketId: '',
    });
    const { container } = render(
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <span>Login</span>
          </Route>
          <Route path='/'>
            <Authorize>
              <span>Test</span>
            </Authorize>
          </Route>
        </Switch>
      </BrowserRouter>
    );
    expect(container.innerHTML).toBe('<span>Login</span>');
  });

  test("redirect to login component if user info is present", () => {
    const useAppSelectorMock = jest.spyOn(hooks, 'useAppSelector');
    useAppSelectorMock.mockReturnValue({
      user: 'abc',
      socketId: '1234567',
    });
    const { container } = render(
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <span>Test</span>
          </Route>
          <Route path='/'>
            <Authorize>
              <span>Test</span>
            </Authorize>
          </Route>
        </Switch>
      </BrowserRouter>
    );
    expect(container.innerHTML).toBe('<span>Test</span>');
  });
});