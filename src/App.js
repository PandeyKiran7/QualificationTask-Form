// src/App.js
 // eslint-disable-next-line 
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
