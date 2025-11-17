import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import './App.css'
import { LanguageProvider } from './context/MyContext';
import Header from './components/Header';
import Main from './components/Main';


function App() {

  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </LanguageProvider>


  )
}

export default App
