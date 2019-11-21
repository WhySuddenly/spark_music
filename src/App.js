import React , {Component} from 'react';
import {GlobalStyle} from './style';
import {Provider} from 'react-redux';
import store from './store/index';
import Home from './pages/home';

class App extends Component {
  render(){
    return (
      <Provider store= {store}>
        <div className="App">
          <GlobalStyle />
          <Home />
        </div>
      </Provider>
      
    );
  }
  
}

export default App;
