import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sound from '../assets/Love-song (mp3cut.net).mp3';
import cracker from '../assets/Sound.mp3'
import './Result.css'
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const route = useNavigate();
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [audioPlayed2, setAudioPlayed2] = useState(false);
  const [modalOpen, setModalOpen] = useState(true); // Set modalOpen to true initially

  const setModalOpenFun = () => {
    setModalOpen(false)
    const audio = new Audio(Sound);
      audio.play();
      setAudioPlayed(true);

      const audio2 = new Audio(cracker);
      audio2.play();
      setAudioPlayed2(true);
  }
 
  const name = localStorage.getItem("name")
  const relection = localStorage.getItem("relection") 
 
  const playAudio = () => {
    if (!audioPlayed) {
      const audio = new Audio(Sound);
      audio.play();
      setAudioPlayed(true);
    }
  };

  const Back = () => {
    route(-1); // This function will take you back to the previous page.
  }

  return (
    <>
    <div className="diwali-container">
    {modalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <span className="close-button" onClick={() => setModalOpenFun()}>
              &times;
            </span>
            {/* Add modal content here */}
            <h2>Diwali Message</h2>
            <p>Your Diwali message content goes here.</p>
          </div>
        </div>
      )}
      <div className="diwali-content">
        <h1>Happy Diwali!</h1>
        <p>💕दीपावली के इस पावन अवसर पर, { name || "💕" }💕 आपके जीवन में प्यार, प्रकाश, और खुशी से भरा हो, और यह त्योहार आपके जीवन में समृद्धि लेकर आए my lovely { relection || "💞" } 💕💞❣️
        💕Wishing { name || "💞" } a Diwali filled with love,💕 light, and joy, and may this festival bring prosperity to your life my lovely {relection || "💞"} 💕💞❣️
        </p>
        <button onClick={Back}>Back</button>
        <br />
        <br />
        <button  onClick={playAudio}>Download As Video</button>
      </div>
    </div>
    </>
  );
};

export default Result;
