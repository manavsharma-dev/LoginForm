
import React from 'react';

import ReactDOM from 'react-dom';
import LoginForm from './src/src/components/LoginForm';

import { Provider }from 'react-redux';
import store from './src/src/redux/store';



class App extends React.Component{
   render(){
      return (
         <div>Hello</div>
      )
   }
}


ReactDOM.render(
   <App />,
   document.getElementById('app')
);
