import React from 'react';
import Iframe from 'react-iframe';


class newStudy extends React.Component {

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

export default newStudy;

		// return (
		// 	<Sound
	 //          url = {"https://www.youtube.com/watch?v=Mts3UYVAp4Y"}
	 //          playStatus={Sound.status.PLAYING}
	 //          onLoading={this.handleSongLoading}
	 //          onPlaying={this.handleSongPlaying}
	 //          onFinishedPlaying={this.handleSongFinishedPlaying}
	 //          volume={50}
  //         	/>
		// );


