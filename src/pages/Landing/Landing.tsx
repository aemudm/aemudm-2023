import React from 'react'
import './Landing.scss'


import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Who from '../components/Who/Who';

const Landing = () => {
  return (
    <body>
        <Navbar/>
        <Main />
        <Who />
    </body>
  )
}

export default Landing