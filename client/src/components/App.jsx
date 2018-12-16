import React from 'react';
import axios from 'axios';
import Heading from './Heading.jsx';
import Summary from './Summary.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    console.log('location', window.location.pathname === '/');
    let id;
    if (window.location.pathname === '/') {
      id = '/1';
    } else {
      id = window.location.pathname;
    }

    axios.get(`http://rooms.4gk2mkr3wk.us-west-2.elasticbeanstalk.com/details${id}`).then(res => {
      this.setState({
        // redundancy because axios returns data through res.data
        data: res.data.data[0]
      });
    });
  }

  render() {
    let {type, title, city, user, sleepingArrangements, selfCheckin, superhost} = this.state.data;
    return (
      <div>
        <Heading
          type = {type}
          title = {title}
          city = {city}
          user = {user}
        />
        <Summary
          sleepingArrangements = {sleepingArrangements}
          type = {type}
          user = {user}
          superhost = {superhost}
          selfCheckin = {selfCheckin}
        />
      </div>
    );
  }
}

export default App;