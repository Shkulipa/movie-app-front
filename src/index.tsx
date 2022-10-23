import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ReduxToastrLib from 'react-redux-toastr';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'src/app';
import { persistor, store } from 'src/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ReduxToastrLib
        newestOnTop={false}
        preventDuplicates
        progressBar
        closeOnToastrClick
        timeOut={5000}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        position="bottom-right"
      />
      <App />
    </PersistGate>
  </Provider>
);
