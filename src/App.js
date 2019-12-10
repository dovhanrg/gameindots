import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './components/store';


import Field from './components/Field';
import FormControl from './components/FormControl';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormControl />
        <Field />
      </div>
    </Provider>
  );
}

export default App;
