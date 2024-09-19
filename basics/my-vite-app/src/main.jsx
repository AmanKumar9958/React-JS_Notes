import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// creating and calling in the same file..
function MyApp(){
  return(
    <div>
      <h2>My Custom React App..</h2>
    </div>
  )
}
// 1st way..
const ReactElement = {
  type: 'a',  // Tag
  props:{     // Properties
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'    // Text to be displayed on webpage
}

// 2nd way..
const anotherElement = (
  <a href="https://google.com" target='_blank'>Click here to visit</a>
)

// 3rd way..
const anotherReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: "_blank"},
  'Please click me to visit google..'
)
createRoot(document.getElementById('root')).render(
    <App />
    // <MyApp/>
    // ReactElement
    // anotherElement
    // anotherReactElement
)


