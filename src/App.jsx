import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Aside from './component/Aside'
import Footer from './component/Footer'

function App() {
  return (
    <div className="wrap">
      <div className='container'>
        <Header/>
        <Aside/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
