import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai'
import React from 'react'

//const reactElement={
  /*type:'a',
  props:{
    href:'https://google.com',
    target:'_blank',
  children:'Click me to visit google'
  }*/
//}
const anotherElement=(
  <a href='https://google.com' target='_blank'>visit google</a>
)
const anotherUser='chai with cookies'
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google',
  anotherUser
)
  createRoot(document.getElementById('root')).render(
reactElement
  
)
