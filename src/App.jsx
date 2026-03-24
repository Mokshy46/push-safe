import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './components/Login';
import Card from './components/Card';


function App() {

  return (

    // <>
    // <div className=' p-5 m-5 flex justify-center space-x-9'>
    // <Card/>
    //     <Card/>
    // <Card/>


    // </div>
    // </>

    <BrowserRouter>

      <Routes>
        <Route path='/login' element={<Login />
        } />


        <Route path='/home' element={
          <ProtectedRoutes>
            <div className=' p-5 m-5 flex justify-center space-x-9'>
            <Card />

            </div>
          </ProtectedRoutes>
        } />

        <Route path="*" element={<Navigate to="/login" />} />
        

      </Routes>
    </BrowserRouter>


  )
}

export default App
