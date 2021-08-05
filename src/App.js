import {Header, Body, Column} from "./components";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div>
      <div style={{display:"block"}}>
        <Header />
      </div>
      <div style={{height:"74vh"}}>
        <div style={{display:"inline-block", width:"80%", float:"left", height:"100%"}}>
          <Body />
        </div>
        <div style={{display:"inline-block", width:"20%", backgroundColor:"lightgray", height:"100%", overflow:"scroll", textAlign:"center"}}>
        <Column />
        </div>
        <div style={{height:"15vh", display:"block", backgroundColor:"gray"}}>
        
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
