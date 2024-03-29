
import React from "react"
import Header from "./components/Header"
import './App.css'
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {    
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route exact path="/capstonproject" element={<Photos/>}/>
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App