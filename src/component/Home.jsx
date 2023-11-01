import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import "./Home.css";
import Sound from '../assets/Sound.mp3';
import { useNavigate } from 'react-router-dom';


function App() {
const route = useNavigate();
  const [name, setName] = useState("");
  const [reflection, setReflection] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    localStorage.setItem('name', "")
    localStorage.setItem('relection', "")
  },[])

  const handleSubmit = () => {
    if(name && reflection){
        // route('/result', { state: { name, reflection } });
        localStorage.setItem('name', name)
        localStorage.setItem('relection', reflection)
        route('/result')
        setName("")
        setReflection("")
    }else{
        alert('Please Fill All the fields')
    }
    if (!audioPlayed) {
      playAudio();
    }
  };

  const playAudio = async () => {
    const audioElement = document.getElementById("diwaliAudio");
    if (audioElement) {
      try {
        await audioElement.play();
        setAudioPlayed(true);
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    }
  };

  useEffect(() => {
    playAudio();
  }, [name]);

  return (
    <div className="App">
      <div className="background">
        <div className="greeting-card">
          <h1>❣️Happy Diwali 2023!</h1>
          <h2>आप जिनको 🪔❤️ दीपवाली  विश करना चाहते हैं उसका नाम और उनके साथ रिलेशन❣️</h2>
          <div className="input-fields">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <textarea
              placeholder="Relationship"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
            />
            <br />
            <br />
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <audio id="diwaliAudio" autoPlay>
            <source src={Sound} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}

export default App;
