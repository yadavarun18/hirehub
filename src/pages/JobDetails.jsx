import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function JobDetails(){

    const {id} = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
     const [skills, setSkills] = useState([]);

 
  const techSkills = [
  "HTML",
  "CSS",
  "React",
  "JavaScript",
  "Node.js"
];

const someSkills = techSkills.slice(0, 3);

    useEffect(()=> {
        const loadJob = async ()=>{
            try{
           const res = await fetch(
          `https://remotive.com/api/remote-jobs`
          );
           const data = await res.json();
           const allJobs = data.jobs;

              const foundJob = allJobs.find(
             (job) => String(job.id) === String(id)
              );

             setJob(foundJob);
             setSkills(someSkills());
            }
            catch(error){
                console.log(error);
            }
            };

           loadJob();
       },[id]);

     if (job === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
     Please wait, job details are loading..
      </div>
    );
  }

    if(!job){
        return(
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
              sorry yrr! Job not found 
            </div>
        );
     }

   return (

    <div className="min-h-screen flex items-center justify-center px-4  bg-gradient-to-br from-gray-900
                 via-gray-800 to-black transition-all duration-700 ease-in-out">

      <div className="bg-white/10 backdrop-blur-lg border border-gray-700 p-8 rounded-xl shadow-lg max-w-2xl w-full  transition-all duration-300 
                       hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-blue-500/20">

        <h1 className="text-2xl font-bold mb-4 text-white">
          {job.title}
        </h1>

        <p className="text-gray-300 mb-6">
          {job.category}
        </p>

        <div className="mb-6">
          <h3 className="font-semibold text-red-300 mb-2">
          Technologies Required
          </h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full
                            text-sm transition-all duration-300 hover:scale-110 hover:bg-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
          </div>

        <div className="flex ">

          <button  onClick={() => navigate(`/apply/${job.id}`)}
           className="bg-blue-700 text-white px-4 py-2 rounded-lg  transition-all duration-300 
                     hover:bg-blue-900 hover:scale-105">
            Apply Now
          </button>
        </div>
          

      </div>
    </div>
  )
};


export default JobDetails;