import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Building2, ShieldCheck } from "lucide-react";

function Home() {

  const[search,setSearch] = useState("");
  const navigate = useNavigate();

   const handleSearch = (e) => {
    e.preventDefault();3
    if (search.trim()) {
      navigate(`/jobs?search=${search}`);
    }
   };

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-all duration-700 ease-in-out ">

        <div className="flex flex-col items-center justify-center text-center px-4 pt-24 relative z-10">
        
        <h1 className="text-3xl md:text-5xl font-bold text-gray-100">
          Find Your <span className="text-red-500">Dream Job</span>
        </h1>

        <p className="mt-4 text-gray-300 max-w-xl">
       Explore Careers. Build Your Future
        </p>

        <form onSubmit={handleSearch}
         className="mt-6 flex flex-col md:flex-row gap-3 w-full max-w-md">

          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg text-black bg-white  transition-all duration-300 ease-in-out 
            focus:ring-2 focus:ring-blue-500 focus:scale-105 outline-none"
          />

          <button   type="submit"
           className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
             Search
          </button>

        </form>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-6 mt-20  relative z-10">
        
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">

         <div className="flex justify-center mb-4">
        <Briefcase size={40} className="text-blue-400" />
        </div>

          <h3 className="font-bold text-lg text-white ">Easy Apply</h3>
          <p className="text-gray-300 text-sm mt-2">
            Apply to jobs with just one click.
          </p>
        </div>


       <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">

       <div className="flex justify-center mb-4">
        <Building2 size={40} className="text-red-400" />
       </div>

          <h3 className="font-bold text-lg text-red-400">Top Companies</h3>
          <p className="text-gray-300 text-sm mt-2">
            Get hired by top companies worldwide.
          </p>
        </div>


        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">

         <div className="flex justify-center mb-4">
         <ShieldCheck size={40} className="text-green-400" />
         </div>
    
          <h3 className="font-bold text-lg text-white">Secure Platform</h3>
          <p className="text-gray-300 text-sm mt-2">
            Your data is safe and protected.
          </p>
        </div>

      </div>

    </div>
  );

}

export default Home;