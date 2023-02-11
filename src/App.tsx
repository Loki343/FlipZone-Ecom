import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import Navbar2 from './Components/Navbar2';

function App() {
  return (
    <div className="App">
      <Navbar2/>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
