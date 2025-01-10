import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Card from './components/Card';
import UserName from './components/UserName';

function App() {
  return (
    <>
      <Nav />
      {/* <Card /> */}
      <UserName username="Aman" city="New Delhi" course="BCA" />
      <Footer />
    </>
  )
}

export default App