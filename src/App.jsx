import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './components/Login';


function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />
        } />


        <Route path='/hero' element={
          <ProtectedRoutes>
            <Hero />
          </ProtectedRoutes>
        } />

        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>


  )
}

export default App
