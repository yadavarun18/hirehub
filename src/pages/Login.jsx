import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User, Mail, Lock } from "lucide-react";

function Login(){

    const navigate = useNavigate();
    const[form, setForm] = useState({
        email:"",
        password:""

    });

    const [show, setShow] = useState(false);

     const handleChange = (e) => {

          setForm({
                  ...form,
                        [e.target.name]: e.target.value,
                 });

                };

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(form.email==="" || form.password===""){
            toast.error("Please fill all fields");
            return;
        }

        if (!form.email.includes("@") || !form.email.includes(".")) {
           toast.error("Please enter a valid email");
           return;
       }

         if (form.password.length < 6) {
             toast.error("Password must be at least 6 characters");
        return;
       }

      const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
        toast.error("No account found, please signup first");
        return;
      }

       if (form.email !== storedUser.email) {
       toast.error("Email not registered");
      return;
    }

    
    if (form.password !== storedUser.password) {
     toast.error("Incorrect password, try again");
      return;
    }

     toast.success("Logged in successfully");
     localStorage.setItem("isLoggedIn", "true");

     setTimeout(()=>{
     navigate("/jobs");
     window.location.reload(); 
     },1500);
     

    };

    return(
        <div className="min-h-screen flex items-center justify-center px-4  bg-gradient-to-br from-gray-900
                       via-gray-800 to-black transition-all duration-700 ease-in-out">

      <form 
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8
                 w-full max-w-sm  transition-all duration-500 hover:scale-105 hover:border-blue-500/40 hover:shadow-blue-500/20"> 

       <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h2>

        <div className="relative mb-4">

        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
        type="text"
        name="email"
        value={form.email}
        placeholder="Enter your email"
        onChange={handleChange}
        className="w-full pl-10 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
 />

       </div>


       <div className="relative mb-5">

      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <input
        type={show ? "text" : "password"}
        name="password"
        value={form.password}
        placeholder="Password" 
        onChange={handleChange}
        className="w-full pl-10 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />

      <span 
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white transition">
    
      {show ? "🙈" : "👁️"}

      </span>

     </div>


    <button className="w-full text-white bg-blue-500 py-2 rounded-lg font-semibold
                       transition-all duration-300 hover:bg-blue-600 hover:scale-105"> 
    Login
    </button>

   <p className="text-sm text-center text-gray-300 font-medium pt-4 mb-6">
          Don’t have an account?{" "}
          
          <Link to="/signup">
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Signup
          </span>
          </Link>

   </p>

      </form>

        </div>

    );
}
export default Login;