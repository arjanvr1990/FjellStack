import "./App.css"
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/navigator/Navigator.jsx";
import Home from "./pages/home/Home.jsx";

function App() {

  return (
    <>
      <div className="app-container">
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>

      </div>
    </>
  )
}

export default App
