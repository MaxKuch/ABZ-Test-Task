import React, { useState } from 'react';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AcquaintanceSection from './components/AcquaintanceSection'
import UsersSection from './components/UsersSection'
import RegistrationSection from './components/RegistrationSection'
import Modal from './components/Modal'
import Footer from './components/Footer'
import SideDrawer from './components/SideDrawer/SideDrawer';
function App() {
  const [drawerOpen, SetDrawerState] = useState(false)
  return (
    <React.Fragment>
      <Header drawerClickHandler={() => {SetDrawerState(!drawerOpen)}}/>
      <HeroSection/>
      <AcquaintanceSection/>
      <UsersSection/>
      <RegistrationSection/>
      <Footer/>
      <Modal id="formModal"/>
      <SideDrawer open={drawerOpen} drawerClickHandler={() => {SetDrawerState(!drawerOpen)}}/>
    </React.Fragment>
  );
}

export default App;
