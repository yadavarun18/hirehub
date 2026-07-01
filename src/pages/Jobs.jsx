import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Jobs() {

    const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search");

  
  const API = "https://remotive.com/api/remote-jobs";

     useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
    navigate("/login");
    }
    }, [navigate]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();


        const jobsData = data.jobs;

        const filteredJobs = jobsData.filter((job) =>
       job.title.toLowerCase().includes(search?.toLowerCase() || "") //Optional Chaining Operator (?.)
       );

      setJobs(filteredJobs); 
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
     };

    getJobs();
    }, [search]);

  return (
    <div className="min-h-screen px-6 py-10  bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-all duration-700 ease-in-out">

      <h1 className="text-3xl font-bold text-white text-center mb-10">
        Latest Jobs
      </h1>

      {loading ? (
        <p className="text-white text-center animate-pulse">Loading jobs</p>
        ) : search && jobs.length === 0 ? (
       <p className="text-red-500 text-center text-xl">
       sorry yrr! No Jobs Found for "{search}"
      </p>

      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white/10 backdrop-blur-lg border border-gray-700  p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-blue-500/20"
            >
              <h2 className="font-bold text-lg text-white">
                {job.title}
              </h2>

              <p className="text-gray-300 mt-2">
               {job.category}
              </p>

              <div className="flex gap-3 mt-4">
              <button  onClick={() => navigate(`/apply/${job.id}`)}
              className="  bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105">
                Apply Now
              </button>

              <Link to={`/job/${job.id}`}>
              <button className=" w-full bg-green-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-green-600 hover:scale-105">
               View Details
              </button>
             </Link>
             </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Jobs;