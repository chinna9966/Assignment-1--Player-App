import './App.css'
import AddUser from './components/AddUser'
import Alluser from './components/Alluser'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SyntaxErrorsHappen from './components/SyntaxErrorsHappen'

function App() {
  return <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<SyntaxErrorsHappen />}></Route>
        <Route path='/add' element={<AddUser />}></Route>
        <Route path='/all' element={<Alluser />}></Route>


      </Routes>

    </BrowserRouter>


  </div>
}

export default App
