import React from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import ProfessionalExperience from './components/ProfessionalExperience'
import './styles/App.css'

function App() {
  

  return (
    <div className="center-container">
      <div className="cv-container">
        <GeneralInfo />
        <Education />
        <ProfessionalExperience />
      </div>
    </div>
  )
}

export default App
