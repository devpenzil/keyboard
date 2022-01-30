import React from "react";
import './Key.css'
import audio from '../asset/key.mp3'
function Key({uptext, downtext, w}) {
    var keysound = new Audio(audio)
    const keyClick = (e) => {
        keysound.play();
    }
    document.onkeydown = (e) => {
      keyClick(e.key)
    }
  return (
    <div className="key" style={{width:w || 60}} onClick={keyClick}>
      <div className="keyup">{uptext}</div>
      <div className="keydown">{downtext}</div> 
    </div>
  );
}

export default Key;
