import './App.css'
import {useEffect, useState} from "react";
import Watch from "./components/Watch/Watch.jsx";
function App() {
  const [watches, setWatches] = useState([]);
  useEffect( () => {
    fetch('watches.json')
    .then(response => response.json())
    .then(data => setWatches(data));
  },[])
  // console.log("watches data", watches);
  return (
    <>
      <h1>React Watch Json Data</h1>
      {watches.map((watch) => (<Watch key={watch.id} watch={watch} />))}
    </>
  )
}

export default App
