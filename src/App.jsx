import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { Section } from './component/Section'
import { Footer } from './component/Footer'
import { main } from './component/main'

function App() {
  const getGreeting=(name)=>`안녕 ${name}`

  return (
    <div>
      <Header/>
      <Section/>
      <main/>
      <h1>Hello React!</h1>
      <p>{getGreeting('Aclice')}</p>
      <Footer/>
    </div>
  )
}

export default App
