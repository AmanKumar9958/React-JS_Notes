import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Card from './components/Card';
import UserName from './components/UserName';
import UserProfile from './components/UserProfile';

function App() {
  const users = [
    {
        "name": "Aman Kumar",
        "state": "Delhi",
        "profession": "Software Engineer",
        "profilePhoto": "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "age": 25
    },
    {
        "name": "Priya Sharma",
        "state": "Maharashtra",
        "profession": "Graphic Designer",
        "profilePhoto": "https://plus.unsplash.com/premium_photo-1682145927654-1913ccba955e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "age": 28
    },
    {
        "name": "Rajesh Gupta",
        "state": "Karnataka",
        "profession": "Data Scientist",
        "profilePhoto": "https://plus.unsplash.com/premium_photo-1682145927654-1913ccba955e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "age": 30
    },
    {
        "name": "Sneha Verma",
        "state": "Uttar Pradesh",
        "profession": "Marketing Specialist",
        "profilePhoto": "https://plus.unsplash.com/premium_photo-1661590863910-69abf33b8f3f?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "age": 27
    },
    {
        "name": "Arjun Singh",
        "state": "Rajasthan",
        "profession": "Teacher",
        "profilePhoto": "https://plus.unsplash.com/premium_photo-1663040197283-fae88b360dad?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "age": 35
    }
]

  return (
    <>
      <Nav />
      {/* <Card /> */}
      {/* <UserName username="Aman" city="New Delhi" course="BCA" /> */}
      {users.map((element) => {
        return <UserProfile name={element.name} age={element.age} state={element.state} photo={element.profilePhoto} profession={element.profession} />
      })}
      <Footer />
    </>
  )
}

export default App