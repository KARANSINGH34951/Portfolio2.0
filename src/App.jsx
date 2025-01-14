import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Body from './Pages/Body';

import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar /> 
       <Body/>
      <Footer/>
      {/* <ErrorPage />  */}
    </div>
  );
}

export default App;
