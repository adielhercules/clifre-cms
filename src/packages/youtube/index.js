import React, {Component} from "react";
import CSSModules from "react-css-modules";

import Slider from "../rangeslider";
import css from "./rangeslider.scss";

import YoutubeAPI from "./api";

class YoutubePlayer extends Component {
  constructor(props) {
    super(props);

    this.player;

    this.state = {
      playing: false,
      ready: false,
      updatingTime: false,
      video_duration: 0,
      video_current_time: 0,
      video_progress: 0,
    };

    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.getInstance = this.getInstance.bind(this);
    this.timeUpdate = this.timeUpdate.bind(this);
    this.onProgressChange = this.onProgressChange.bind(this);
  }

  DOMID = 'react-youtube-player';

  componentDidMount() {
    new YoutubeAPI(this.DOMID, this.onPlayerReady, this.onPlayerStateChange, this.getInstance)
  }

  onPlayerReady(event) {
    this.setState({
      ready: true,
      video_duration: 0,
      video_current_time: 0,
      video_progress: 0
    });
  }

  timeUpdate() {

    this.setState({ updatingTime: true });

    setInterval(() => {
      /*let timeprogressEl = document.getElementById('vtimeprogress');
      let current_time = scope.api.youtube.getCurrentTime();
      let total_time = scope.api.youtube.getDuration();
      let current_percent = ( current_time / total_time ) * 100;

      timeprogressEl.style.width = current_percent + "%";*/

      const video_duration = this.player.getDuration();
      const video_current_time = this.player.getCurrentTime();
      const video_progress = ( video_current_time / video_duration ) * 100;

      this.setState({
        video_current_time,
        video_duration,
        video_progress,
      });
    }, 300);
  }

  onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      this.setState({ playing: true });
      if ( !this.state.timeUpdateRunning ) {
        this.timeUpdate();
      }
    }
  }

  getInstance(instance) {
    this.player = instance;
  }

  onProgressChange(value) {
    if ( this.state.playing ) {
      //this.player.pauseVideo();
      //this.setState({ playing: false });
    }

    this.player.seekTo(value);
  }


  /*
  <div className="progress" style={ style.progress }>
   <div className="progressbar" style={ { ...style.progressbar, width: `${ this.state.video_progress }%` }  }></div>
   </div>
   */

  render() {
    return (
      <div>
        <div id={ this.DOMID }>Loading...</div>

        <Slider
          max={ this.state.video_duration }
          step={ 0.25 }
          value={ this.state.video_current_time }
          onChange={ this.onProgressChange }
          className={ css.rangeslider }
          fillClassName={ css.rangeslider__fill }
          handleClassName={ css.rangeslider__handle }
        />
      </div>
    );
  }
}

const style = {
  progress: {
    position: 'relative',
    width: 300,
    height: 5,
    background: '#999',
    border: '1px solid #000'
  },
  progressbar: {
    position: 'relative',
    background: '#000',
    height: 5,
    width: 0
  }
};

export default CSSModules(YoutubePlayer, css);
