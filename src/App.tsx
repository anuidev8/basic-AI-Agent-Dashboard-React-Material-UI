
import { Route, Routes } from 'react-router'
import './App.css'
import AgentsLisPage from './pages/agents'


function App() {


  return (
    
       <Routes>
          <Route path='/' element={<AgentsLisPage/>} />
       </Routes>
  )
}

export default App
