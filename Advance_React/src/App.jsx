
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import Product from './pages/Product'
import {Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
function App() {

  return (
  <div className='h-screen bg-black text-white'>
  
    <Navbar/>

    <h2> hiii</h2>
  <Routes>
   <Route path = '/' element = {<Home/>} />
   <Route path = '/about' element = {<About/>} />
   <Route path = '/courses' element = {<Courses/>} />
   <Route path = '/courses/:id' element = {<CourseDetail/>} /> 
   <Route path = '/contact' element = {<Contact/>} />
   <Route path = '/product' element = {<Product/>}>
    <Route path = 'men' element = {<Men />} />
        <Route path = 'Women' element = {<Women />} />

    </Route>

<Route path='*' element = {<NotFound/>} />
 

  </Routes>
    <Footer/>
  </div>
  )
}

export default App
