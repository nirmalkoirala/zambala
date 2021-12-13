import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./routes/Home";
import Services from "./routes/Services";
import Aboutus from "./routes/Aboutus";
import ContactForm from "./routes/ContactForm";
import Announcements from "./routes/Announcements";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/services' element={<Services />} />
        <Route path='/announcements' element={<Announcements />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
