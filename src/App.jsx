import FirstPage from "./components/FirstPage"
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <div className="App">
      {/* <FirstPage /> */}
      <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </div>
  )
}

export default App
