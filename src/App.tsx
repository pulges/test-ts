import { PureComponent } from 'react';

import './App.css';


interface Props {
  foo?: string
}

class App extends PureComponent<Props> {
  render () {
    return (
      <div className="App">
          { this.props.foo || 'empty' }
      </div>
    );
  }
}

export default App;
