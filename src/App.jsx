import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Overview from './components/Overview/Overview'
import Market from './components/Market/Market'
import Founders from './components/Founders/Founders'
import Mission from './components/Mission/Mission'
import BrandPositioning from './components/BrandPositioning/BrandPositioning'
import Procedure from './components/Procedure/Procedure'
import Traction from './components/Traction/Traction'
import KeyMetrics from './components/KeyMetrics/KeyMetrics'
import Roadmap from './components/Roadmap/Roadmap'
import OnlinePresence from './components/OnlinePresence/OnlinePresence'

function App() {
  return (
    <>
      <Overview />
      <Market />
      <Founders />
      <Mission />
      <BrandPositioning />
      <Procedure />
      <Traction />
      <KeyMetrics />
      <Roadmap />
      <OnlinePresence />
    </>
  )
}

export default App
