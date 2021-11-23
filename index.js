import React from "react"
import ReactDOM from "react-dom"
import Info from  "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

function HomeScreen(){
    
    return(
        <div>
           <Info/>
           <About/>
           <Interests/>
           <Footer/>
             
        </div>
    )
}

ReactDOM.render(<HomeScreen/>, document.getElementById("root"))