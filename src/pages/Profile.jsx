import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

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

    const savedProfile =
      JSON.parse(localStorage.getItem("userDetails"));

     if (savedProfile) {
    setProfile(savedProfile);
     }

  }, []);

  return (

    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-all duration-700 ease-in-out">

     
      <div className="relative h-52 sm:h-60">

        {profile.coverImage ? (

          <img
            src={profile.coverImage}
            alt="cover"
            className="w-full h-full object-cover"
          />

        ) : (

          <div className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"></div>

        )}

        <div className="absolute inset-0 bg-black/30"> </div>

        <div className="absolute -bottom-16 left-10">

       {profile.image ? (

        <img
          src={profile.image}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-900"
        />

      ) : (

        <div className="w-32 h-32 rounded-full bg-gray-700 border-4 border-gray-900 flex items-center justify-center">
         Upload Photo
        </div>

       )}

      </div>
      </div>


      <div className="pt-22 px-4 sm:px-6 md:px-10 pb-10">

        <div className="flex flex-col md:flex-row md:justify-between gap-6">

          <div>

            <h1 className="text-3xl font-bold">
              {profile.name || "Profile Name"}
            </h1>

            <p className="text-white mt-3 max-w-2xl leading-relaxed whitespace-pre-line">
              {profile.bio || "Tell something about yourself"}
            </p>

            <div className="flex flex-col gap-3 mt-6 text-white">

              <div>
                 <span className="font-semibold">Location:</span>{" "}
                {profile.location || "Location not shared"}
              </div>

              <div>
                 <span className="font-semibold">Experience:</span>{" "}
                {profile.experience || "No experience added"}
              </div>

              <div>
                 <span className="font-semibold">Education:</span>{" "}
                {profile.education || "Not Added"}
              </div>

              <div>
                 <span className="font-semibold">College:</span>{" "}
                {profile.college || "College name not added"}
              </div>

              <div>
                 <span className="font-semibold">Contact:</span>{" "}
                {profile.contact || "Contact number not added"}
              </div>

            </div>

          </div>

          <button
              onClick={() => navigate("/edit-profile")}
              className="bg-blue-600 px-5 py-2 rounded-lg text-sm font-semibold 
                           hover:bg-blue-700 transition-all duration-300 self-start"
          >
         Edit Profile

         </button>

        </div>

        
        <div className="mt-12">

          <h2 className="text-2xl font-semibold mb-5">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {profile.skills ? (

              profile.skills.split(",").map((skill, index) => (

                <span
                  key={index}
                  className="bg-blue-500/20 text-white px-4 py-2 rounded-full border border-blue-500/30"
                >
                  {skill.trim()}
                </span>

              ))

            ) : (

              <p className="text-gray-400">
                No skills added
              </p>

            )}

          </div>

        </div>

      
        <div className="mt-12">

          <h2 className="text-2xl font-semibold mb-5">
            GitHub Profile
          </h2>

          {profile.github ? (

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer" // for security
              className="text-blue-400 break-all hover:underline"
            >
              {profile.github}
            </a>

          ) : (

            <p className="text-gray-400">
             GitHub link not available
            </p>

          )}

        </div>

      </div>

    </div>
  );
}

export default Profile;