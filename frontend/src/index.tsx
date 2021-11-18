import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import App from './App';
import i18n from './i18next';
import { store } from './redux/store';
import './style.scss';

render(
  <StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <App/>
        </Provider>
      </I18nextProvider>
    </Suspense>
  </StrictMode>,
  document.getElementById('app'),
);
