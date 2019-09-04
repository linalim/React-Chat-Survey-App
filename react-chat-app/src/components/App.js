require('../styles/App.css');
require('../styles/Login.css');

import React from 'react';
import Lobby from './Lobby';
import ChatApp from './ChatApp';
import FirstSurvey from './FirstSurvey';
import SecondSurvey from './SecondSurvey';
import EndPage from './EndPage';
import NotAvailable from './NotAvailable';
import Ready from './Ready';
//import soundfile from '../styles/alert.mp3';
//import newStudy from './newStudy';
import io from 'socket.io-client';
import config from '../config';

class App extends React.Component {


  state = {
    redirect1: false, redirect2: false, redirect3: false, redirect4: false, redirect5: false, redirect6:false
  }

  constructor(props) {
    super(props);
    this.state = { username: '', counter : 0, firstcounter : 0, usernamelist: []};

    // Bind 'this' to event handlers. React ES6 does not do this by default
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);

    this.socket = io(config.api, { query: `username=${props.username}` }).connect();
    this.socket.on('server:counter', counter => {
      this.setCount(counter);
    });
    this.socket.on('server:usernamelist', username_list => {
      this.setList(username_list);
    })

  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
        this.setState({ submitted: true, username: this.state.username});
    this.socket.emit('client:hello', this.state.username);
  }

  setCount(count) {
    this.setState({ counter:  count});
  }

  setList(list){
    this.setState({usernamelist: list});
  }

  render() {
      if (this.state.submitted) {
        setTimeout(() => this.setState({ redirect1: true}), 10000) //waiting for 5 min

        if (this.state.counter == 3){
          setTimeout(() => this.setState({ redirect6: true}), 14000)

          if (this.state.redirect6) {
            setTimeout(() => this.setState({ redirect2: true}), 10000)

          if (this.state.redirect2) {
            setTimeout(() => this.setState({ redirect3: true}), 20000)

            if (this.state.redirect3) {
              setTimeout(() => this.setState({ redirect4: true}), 10000)

              if (this.state.redirect4) {
                setTimeout(() => this.setState({ redirect5: true}), 20000)

                if (this.state.redirect5) {
                  return <EndPage />
                }
                return <SecondSurvey />
              }
              return (
                <ChatApp username={this.state.username} />
              );
            }
            return <FirstSurvey />
          }
        // Form was submitted, now show the main App
        return (
          <ChatApp username={this.state.username} />
        );
      }
          return <Ready />
      }
      else if (this.state.counter > 3) {
        return <NotAvailable />
      }
      
      else if (this.state.redirect1) {
        this.socket.disconnect();
        return <NotAvailable />

      }


      return <Lobby />
      //return <Lobby counter = {this.state.counter}/>
    }

    // Initial page load, show a simple login form
      return (
        <form onSubmit={this.usernameSubmitHandler} className="username-container">
          <h1>React Instant Chat</h1>
          <div>
            <input
              type="text"
              onChange={this.usernameChangeHandler}
              placeholder="Enter a username..."
              required />
          </div>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}
App.defaultProps = {
};

export default App;