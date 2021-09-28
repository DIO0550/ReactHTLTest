import React from 'react';
import Hls from 'hls.js';

export default class PlayerComponent extends React.Component {
  static loadAudio() {
    const audioSrc = 'hls source';
    const audioElement = document.getElementById('audio') as HTMLMediaElement;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(audioSrc);
      hls.attachMedia(audioElement);
    }
  }

  static play() {
    const audioElement = document.getElementById('audio') as HTMLMediaElement;
    audioElement.play();
  }

  static stop() {}

  render() {
    return (
      <div>
        <audio muted id="audio" />
        <button type="button" id="play-button" onClick={PlayerComponent.play}>再生</button>
        <button type="button" id="stop-button" onClick={PlayerComponent.stop}>停止</button>
      </div>
    );
  }
}
