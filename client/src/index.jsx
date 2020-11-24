import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import PageHeader from './components/PageHeader.jsx';


ReactDOM.render(<PageHeader />, document.getElementById('header'));


if (document.getElementById('app')) {
  ReactDOM.render(<App/>, document.getElementById('app'));
} else {
  ReactDOM.render(<App/>, document.getElementById('service4'));
}