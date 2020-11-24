import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import PageHeader from './components/PageHeader.jsx';
import PageFooter from './components/PageFooter.jsx';


ReactDOM.render(<PageHeader />, document.getElementById('header'));
ReactDOM.render(<PageFooter />, document.getElementById('footer'));



if (document.getElementById('app')) {
  ReactDOM.render(<App/>, document.getElementById('app'));
} else {
  ReactDOM.render(<App/>, document.getElementById('service4'));
}