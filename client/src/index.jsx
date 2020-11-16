import React from 'react';
import ReacDOM from 'react-dom';
import './styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Hello World!</div>
    );
  }
}

ReacDOM.render(<App/>, document.getElementById('app'))