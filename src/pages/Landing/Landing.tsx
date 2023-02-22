import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';

import './Landing.scss'

import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Who from '../components/Who/Who';
import Campuses from '../components/Campuses/Campuses';
import Mission from '../components/Mission/Mission';
import Activities from '../components/Activities/Activities';
import Structure from '../components/Structure/Structure';
import Comites from '../components/Comites/Comites';
import Members from '../components/Members/Members';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import ScrollToTop from './components/Button/ScrollToTop';

const Landing = () => {
  return (
    <body>
      <BrowserRouter>
        <Navbar />
        <Main />
        <Campuses />
        <Who />
        <Mission />
        <Activities />
        <Structure />
        <Comites />
        <Members />
        <Contact />
        <Footer />
      </BrowserRouter>
      <ScrollToTop />
    </body>
  )
}

export default Landing