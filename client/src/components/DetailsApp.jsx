import React from 'react';
import axios from 'axios';
import Heading from '../components/Heading.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/details${window.location.pathname}`).then(res => {
      this.setState({
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
          superhost = {superhost}
          selfCheckin = {selfCheckin}
        />
      </div>
    );
  }
}

export default App;