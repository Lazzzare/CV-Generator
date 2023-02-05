import FirstPage from "./components/FirstPage"
import PersonalPage from "./components/PersonalPage"
import ExperiencePage from './components/ExperiencePage';
import EducationPage from './components/EducationPage';
import FinalResumePage from './components/FinalResumePage';
import { Routes, Route } from "react-router-dom"


function App() {


  return (
    <div className="App">
      {/* <FirstPage /> */}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/resume" element={<FinalResumePage />} />
      </Routes>
    </div>
  )
}

export default App
