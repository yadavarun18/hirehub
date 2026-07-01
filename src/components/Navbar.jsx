import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar(){

     const navigate = useNavigate();

     const[isLoggedIn, setIsLoggedIn] = useState(false);
     const [profileImage, setProfileImage] = useState("");
    
     useEffect(() => {

    const loginStatus = localStorage.getItem("isLoggedIn");

        if (loginStatus) {
          setIsLoggedIn(true);
      }

       const userData =
      JSON.parse(localStorage.getItem("userDetails"));

     if (userData && userData.image) {
      setProfileImage(userData.image);
      }

     }, []);

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return(
    
<nav className="flex justify-between items-center px-3 sm:px-6 py-3 bg-white w-full">
        <Link to="/" className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
       <img src={logo} alt="logo" className="h-15 w-auto" />
       </Link>

        <div className="flex flex-wrap gap-3 items-center justify-end">

        <Link to="/">
          <button className="text-gray-700 font-semibold hover:text-blue-600 transition-all duration-300 hover:scale-105 ">
            Home
          </button>
        </Link>


         <Link to="/jobs">
          <button className="text-gray-700 font-semibold transition-all duration-300 hover:text-blue-600 hover:scale-105">
            Jobs
          </button>
        </Link>

         {isLoggedIn && (

          <Link to="/profile">

            {profileImage ? (

              <img
                src={profileImage}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 hover:scale-110"
              />

            ) : (

              <UserCircle
                size={34}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              />

            )}

          </Link>

        )}

         {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-600 hover:scale-105"
        >
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105">
            Login
          </button>
        </Link>
      )}
      

        </div>

      </nav>

        );
    }
  
    export default Navbar;
