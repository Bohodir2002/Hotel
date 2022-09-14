import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rooms from '../src/pages/Rooms/Rooms'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Productinfo from './components/Booking/Booking'
import firebase from './components/filebase/config'
import Registatsiya from './components/Registator/Registatsiya'
const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path="/" element={user ? <Home user={user} /> : <Registatsiya />} />
        <Route path="/Rooms" element={<Rooms/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/:id' element={<Productinfo/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
