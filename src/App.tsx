import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from './components';
import Navigation from './navigation';
import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar />
    <Navigation />
  </Provider>
);

export default App;
