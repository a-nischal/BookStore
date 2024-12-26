import Navbar from '../../Home/Navbar'
import Footer from '../../Home/Footer'
import Course from "../Course"

function Courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
        <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses
