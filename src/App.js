import React from 'react';
import { Provider} from 'react-redux'
import {GlobalStyle} from  './style'
import {GlobalFontStyle} from './statics/iconfont/iconfont'
import AppRouter from "./router";
import store from './store'
function App() {
  return (
    <Provider store = {store}>
      <React.Fragment>
        <GlobalStyle />
        <GlobalFontStyle />
        <AppRouter/>
      </React.Fragment>
    </Provider>
    
  );
}

export default App;
