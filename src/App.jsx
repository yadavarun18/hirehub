import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Footer from "./pages/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import ApplyJob from "./pages/ApplyJob";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){

    return(

        <BrowserRouter>
        
        <Navbar/>
      
        <Routes>
            
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/privacy" element={<Privacy />} />
             <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply/:id" element={<ApplyJob />} />
             <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />

        </Routes>

    <ToastContainer position="top-right" autoClose={2000} />

        <Footer/>
      
        </BrowserRouter>

      
    );
}
export default App;