import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Nav from './component/Nav'
import Section from './component/Section'
import Article from './component/Article'
import Aside from './component/Aside'
import { Footer } from './component/Footer'

function App() {

  return (
    <div className='container'>
      <Header/>
      <Nav/>
      <div className='content'>
        <Section/>
        <Article/>
        <Aside/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
