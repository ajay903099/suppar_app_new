import { BrowserRouter,Route,Routes } from "react-router-dom"
import Browse from "./pages/Browse"
import Display from "./pages/Display"
import Movies from "./pages/Movies"
import Register from "./pages/Register"


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/display" element={<Display/>}/>
          <Route path="/browse" element={<Browse/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
