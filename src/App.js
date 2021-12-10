import logo from './logo.svg';
import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.jpeg';
import Video from './myVideo.mp4';
function App() {
  return (
    <div className="App">
    <div className="checkpoint" style={{border:"solid 1px black",maxWidth:"100vw", }}>
      <h1 className={"title red"}>Aymen BRAHMI</h1>
      <br/>
      <img src={imageInSrc} alt='image in the src folder'/>
      <br/>
      <img src="/imageInPublic.jpeg" alt='image in the public folder'/>
      <br/>
      <video width="720" height="500" controls>
      <source src={Video} type="video/mp4"/>
      </video>
      </div>
    </div>  
  );
};
export default App;
