import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Film from "./Film"
import MovieDetails from "./MovieDetails"


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Film/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </Router>
  )
} 
  
export default App;
