import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>This is the Rooms component</h1>
      </div>
    );
  }
}

export default App;