import React from 'react';
// import request from 'request';
// const request = require('request');
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    // request('http://localhost:3001/1/details', (error, response) => {
    //   console.log('response.body', response);
    // });
    // fetch('http://localhost:3001/1/details').then((res) => {
    //   console.log('data', res.body);
    // });
    $.get('http://localhost:3001/1/details', (data) => {
      console.log('this is data', data.data[0]);
    });
  }

  render() {
    return (
      <div>
        <h1>This is the Rooms component</h1>
        <div>
          this is the data we got back:
          {console.log(this.state.data)}
          {this.state.data.id}

        </div>
      </div>
    );
  }
}

export default App;