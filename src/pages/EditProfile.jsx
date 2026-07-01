import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditProfile() {

  const navigate = useNavigate();

 const [profile, setProfile] = useState({
      name: "",
      bio: "",
      skills: "",
      experience: "",
      location: "",
      education: "",
      college: "",
      contact: "",
      github: "",
      image: "",
      coverImage: ""
   });

  useEffect(() => {

  const data = JSON.parse(localStorage.getItem("userDetails"));

  if (data) {
    setProfile(data);
  }

  }, []);

  const handleChange=(e)=>{

        setProfile({ ...profile, [e.target.name]: e.target.value,
        });
    };

  const handleSave = () => {

  localStorage.setItem("userDetails", JSON.stringify(profile));

  toast.success("Profile saved");

  navigate("/profile");
  };
 
  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900
                   via-gray-800 to-black transition-all duration-700 ease-in-out text-white px-4 py-8">

      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-gray-700 rounded-3xl p-5 sm:p-8 shadow-2xl">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold">
              Update Profile
          </h1>

          <p className="text-gray-300 mt-2">
            Change your information here
          </p>

        </div>

        <div className="flex flex-col items-center mb-8">

          {profile.image ? (

            <img
              src={profile.image}
              alt="profile"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-blue-500 object-cover shadow-xl"
            />

          ) : (

            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gray-700 flex items-center justify-center border-4 border-blue-500">
              Add Photo
            </div>

          )}

          <label className="mt-5 text-gray-200">
           Choose Profile Photo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {

          const file = e.target.files[0];

          if (!file) return;

          const reader = new FileReader();

          reader.onload = () => {

          setProfile({
                ...profile,
                image: reader.result
                 });

                 };

           reader.readAsDataURL(file);

           }}
            className="mt-3 w-full sm:w-[70%] file:mr-4 file:py-2 file:px-4 file:rounded-lg
                      file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />

        </div>

        
        <div className="mb-6">

          <label className="block mb-2 text-gray-300 ">
            Choose Cover Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {

            const file = e.target.files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = () => {

            setProfile({
                ...profile,
                 coverImage: reader.result
            });

            };

           reader.readAsDataURL(file);

            }}
            className="w-full bg-gray-800 p-4 rounded-xl border border-gray-700 "
          />

        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 outline-none"
          />

          <input
            type="text"
            name="contact"
            value={profile.contact}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 outline-none"
          />

          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            placeholder="Location"
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 outline-none"
          />

          <input
            type="text"
            name="experience"
            value={profile.experience}
            onChange={handleChange}
            placeholder="Experience"
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 outline-none"
          />

          <input
            type="text"
            name="education"
            value={profile.education}
            onChange={handleChange}
            placeholder="Education"
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 outline-none"
          />

          <input
            type="text"
            name="college"
            value={profile.college}
            onChange={handleChange}
            placeholder="College Name"
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 outline-none"
          />

          <input
            type="text"
            name="skills"
            value={profile.skills}
            onChange={handleChange}
            placeholder="Your skills"
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 outline-none"
          />

          <input
            type="text"
            name="github"
            value={profile.github}
            onChange={handleChange}
            placeholder="GitHub Link"
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 outline-none"
          />

        </div>

        
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          placeholder="About yourself"
          rows="5"
          className="w-full mt-6 bg-gray-800 p-4 rounded-xl border border-gray-700 outline-none"
        />

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <button
            onClick={handleSave}
            className="w-full bg-green-600 py-3 rounded-xl text-lg font-semibold hover:bg-green-700"
          >
            Save Changes
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="w-full bg-red-600 py-3 rounded-xl text-lg font-semibold hover:bg-red-700"
          >
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditProfile;