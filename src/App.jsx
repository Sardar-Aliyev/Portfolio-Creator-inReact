import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Companies from './components/Companies'
import Services from './components/Services'
import Project from './components/Project'
import Blogs from './components/Blogs'
import ProductDes from './components/ProductDes'
import Experience from './components/Experience'
import Testimonal from './components/Testimonal'
import Faq from './components/Faq'
import Footer from './components/Footer'


function App() {


  return (
    <>
      
        <Navbar />
        <Introduction />
        <Companies/>
        <Services/>
        <Project/>
        <Blogs/>
        <ProductDes/>
        <Experience/>
        <Testimonal/>
        <Faq/>
        <Footer/>
    
        
        


    </>
  )
}

export default App
