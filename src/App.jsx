import { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from './containers/Home'

import './styles/App.css'

function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
