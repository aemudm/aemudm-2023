import React from 'react'
import './Landing.scss'


import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Who from '../components/Who/Who';
import Campuses from '../components/Campuses/Campuses';
import Mission from '../components/Mission/Mission';
import Activities from '../components/Activities/Activities';

const Landing = () => {
  return (
    <body>
      <Navbar />
      <Main />
      <div className="info">
        <Who />
        <Mission />
      </div>
      <Activities />

    </body>
  )
}

export default Landing