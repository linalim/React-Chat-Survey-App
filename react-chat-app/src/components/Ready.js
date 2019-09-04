// import * as Survey from 'survey-react';
// import 'survey-react/survey.css';
import React from 'react';
import Iframe from 'react-iframe';


class Ready extends React.Component {

	render(){

  		return (
  			<Iframe url="https://www.youtube.com/embed/xEBwjoempuI?autoplay=1&mute=1"
            position="absolute"
            width="100%"
            height="100%"
            allowFullScreen/>
  		);

	}
}

export default Ready;