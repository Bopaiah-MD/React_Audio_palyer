import './App.css';

export default function Player({ url }) {
  
let defaultUrl = url?.preview_url || "https://p.scdn.co/mp3-preview/1fc135f92f01b35c3c03b4dea2ca13ee15b5427d?cid=960f87b99f6f4a3eb3d37403ed0e6321";
  let nativeAudioPlayer = (
    <div className="audio">
      <audio src={defaultUrl} type="audio/ogg" controls autoPlay/>
    </div>

  );


  return (
    <>{ nativeAudioPlayer }</>
    )

  }
     
