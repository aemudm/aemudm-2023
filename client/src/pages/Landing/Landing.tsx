import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';

import './Landing.scss'

import Navbar from '../components/Navbar/Navbar.tsx';
import Main from '../components/Main/Main.jsx';
import Who from '../components/Who/Who.tsx';
import Campuses from '../components/Campuses/Campuses.tsx';
import Mission from '../components/Mission/Mission.tsx';
import Activities from '../components/Activities/Activities.tsx';
import Structure from '../components/Structure/Structure.tsx';
import Comites from '../components/Comites/Comites.tsx';
import Members from '../components/Members/Members.tsx';
import Footer from '../components/Footer/Footer.tsx';
import Contact from '../components/Contact/Contact.jsx';
import ScrollToTop from './components/Button/ScrollToTop.tsx';

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