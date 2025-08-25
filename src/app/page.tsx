
import { About } from "./component/about";
import { Blog } from "./component/blogs";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Blogs from "./component/hacktone";
import NavBaar from "./component/header";
import Skills from "./component/skills";

export default function Main (){
  return(
   <div>
   <NavBaar/>
   <About/>
   <Blog/>
   <Skills/>
   <Blogs/>
   <Contact/>
   <Footer/>
   </div>
   
  )
}