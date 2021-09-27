import GetDogs from "./components/GetDogs";

function App() {
  document.body.style.margin = '0';
  return (
    <div className="App"  style={{backgroundColor: '#D3D3D3', padding: '0', margin: '0'}}>
      <h1 style={{margin: '0', position: 'sticky', top: '0'}}>AdoptSeattleDogs</h1>
      <GetDogs />
    </div>
  );
}

export default App;
