import React from 'react';
import Iframe from 'react-iframe';

class SecondSurvey extends React.Component {

	render(){
		return (
  			<Iframe url="https://brown.co1.qualtrics.com/jfe/form/SV_72L62NEk5SmDDLv"
            position="absolute"
            width="100%"
            height="100%"
            allowFullScreen/>
  		);
	}
}

export default SecondSurvey;