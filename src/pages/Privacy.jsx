function Privacy() {
  return (
    <div className="min-h-screen px-6 py-10  bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-all duration-700 ease-in-out">

      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-gray-700 p-8 rounded-xl shadow transition-all duration-500 hover:scale-105 hover:border-blue-500/40 hover:shadow-blue-500/20">

        <h1 className="text-3xl font-bold mb-6 text-white">
          Privacy Policy
        </h1>

        <p className="text-gray-300 mb-4">
          At HireHub, your privacy is important to us. We only collect the information
          you provide during signup, such as your name, email, and password.
        </p>

        <p className="text-gray-300 mb-4">
          We use your data only to provide you with job-related services and improve
          your experience on our platform.
        </p>

        <p className="text-gray-300 mb-4">
          We do not share your personal information with any third parties.
        </p>

        <p className="text-gray-300 mb-4">
          Your data is stored securely, and you can contact us anytime if you want
          your data to be removed.
        </p>

        <p className="text-gray-300">
          By using HireHub, you agree to this privacy policy.
        </p>

      </div>

    </div>
  );
}

export default Privacy;