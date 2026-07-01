import { useState } from "react";
import { toast } from "react-toastify";
import { User, Mail ,MessageSquare } from "lucide-react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,[e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   if (!form.name || !form.email || !form.message) {
    toast.error("Please fill all fields ");
      return;
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      toast.error("Please enter a valid email");
      return;
    }

    toast.success("Message sent successfully ");
    console.log(form);

    // reset form
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-all duration-700 ease-in-out flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg border border-gray-700 p-8 rounded-xl shadow-lg w-full max-w-md transition-all duration-500 hover:scale-105 hover:border-blue-500/40 hover:shadow-blue-500/20"
      >

        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Contact Us
        </h2>

       <div className="relative mb-4">

        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter your name"
          onChange={handleChange}
          className="w-full pl-10 px-4 py-2 border rounded-lg bg-gray-800 text-white  border-gray-600 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          transition-all duration-300"
        />
        </div>

         <div className="relative mb-4">
         
         <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          name="email"
          value={form.email}
          placeholder="Your Email add."
          onChange={handleChange}
          className="w-full pl-10 px-4 py-2 border rounded-lg bg-gray-800 text-white  border-gray-600 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          transition-all duration-300"
        />
        </div> 

        <div className="relative mb-4">
         
         <MessageSquare className="absolute left-3 top-6 -translate-y-1/2 text-gray-400" size={18} />
        <textarea
          name="message"
          value={form.message}
          placeholder="Write your message"
          onChange={handleChange}
          className="w-full pl-10 px-4 py-2 border rounded-lg bg-gray-800 text-white border-gray-600 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          transition-all duration-300"
          rows="4"
        ></textarea>
        </div>

        <button className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg transition-all duration-500 hover:scale-105 hover:bg-blue-600">
         Submit
        </button>

      </form>

    </div>
  );
}

export default Contact;