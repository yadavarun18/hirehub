import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-0 py-6">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        
        <h1 className="text-xl font-bold text-blue-400">
          HireHub
        </h1>

       
        <p className="text-sm mt-2 md:mt-0 text-gray-300">
          © 2026 HireHub. All rights reserved.
        </p>

      
        <div className="flex gap-4 mt-2 md:mt-0 font-medium ">

          <Link to="/privacy" 
          className="transition-all duration-300 hover:text-blue-600 hover:scale-105">
          Privacy</Link>

         <Link to="/terms" 
         className="transition-all duration-300 hover:text-blue-600 hover:scale-105">
         Terms</Link>

          <Link to="/contact"
          className="transition-all duration-300 hover:text-blue-600 hover:scale-105">
          Contact</Link>

        </div>

      </div>

    </footer>
  );
}

export default Footer; 