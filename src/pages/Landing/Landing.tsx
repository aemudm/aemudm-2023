import React from 'react'
import { BrowserRouter } from 'react-router-dom';

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

const Landing = () => {
  return (
    <body>
      <Navbar />
      <Main />
      <Campuses />
      <div className="info">
        <Who />
        <Mission />
      </div>
      <Activities />
      <Structure />
      <Comites />
      <Members />
      <Footer />
    </body>
  )
}

export default Landing