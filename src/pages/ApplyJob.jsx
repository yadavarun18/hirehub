import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Wrench,
  FileText
} from "lucide-react";

function ApplyJob() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone:"",
    experience:"",
    skills:"",
    resume: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,[e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.experience || !form.skills || !form.email || !form.resume) {
      toast.error("Please fill all fields");
      return;
    }

    
    const  applicationData = {
      jobId: id,
      ...form
    };

      console.log(applicationData);

    toast.success("Application submitted successfully ");

    setTimeout(() => {
      navigate("/jobs");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg border border-gray-700 
        p-8 rounded-2xl shadow-2xl w-95  transition-all duration-300 hover:scale-105  hover:border-blue-500/40 hover:shadow-blue-500/20 "
      >

        <h2 className="text-xl text-white font-bold mb-4 text-center">
          Apply for Job
        </h2>

       <div className="relative mb-3">
        <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          className="w-full pl-10 px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
          transition-all duration-300"
        />
        </div>

        <div className="relative mb-3">
       <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full pl-10 px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
          transition-all duration-300"
        />
        </div>

        <div className="relative mb-3">
        <Phone className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full pl-10 px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div className="relative mb-3">
        <Briefcase className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          name="experience"
          placeholder="Years of experience"
          value={form.experience}
          onChange={handleChange}
          className="w-full pl-10 px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div className="relative mb-3">
        <Wrench className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          name="skills"
         placeholder="Enter your skills"
          value={form.skills}
          onChange={handleChange}
          className="w-full pl-10 px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        <div className="relative mb-4">
        <FileText className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          name="resume"
          placeholder="Resume Link"
          value={form.resume}
          onChange={handleChange}
          className="w-full pl-10 px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
          transition-all duration-300"
        />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg 
          hover:bg-blue-700  transition-all duration-300 hover:scale-105"
        >
          Apply Now
        </button>

      </form>

    </div>
  );
}

export default ApplyJob;