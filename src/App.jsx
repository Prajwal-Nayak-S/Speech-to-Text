import './App.css'
import useClipboard from "react-use-clipboard";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';
const App = () => {
  const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy);
   const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
   const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  
     if (!browserSupportsSpeechRecognition) {
        return null
    }
  
   
  return (
    <div>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <p>React Hook that converts speech from the microphone to text and makes it available for your React componenets </p>
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
                         {transcript}
        </div>
        <div className="btn-style">
         <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
         <button onClick={startListening}>Start</button>
         <button onClick={SpeechRecognition.stopListening}>Stop</button>
        
        </div>
      </div>
    </div>
  )
}

export default App
