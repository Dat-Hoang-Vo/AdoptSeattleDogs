import { AppBar } from "@mui/material";
import GetDogs from "./components/GetDogs";

function App() {
  document.body.style.margin = '0';
  return (
    <div className="App"  style={{backgroundColor: '#D3D3D3', padding: '0', margin: '0'}}>
      
      <GetDogs />
    </div>
  );
}

export default App;
