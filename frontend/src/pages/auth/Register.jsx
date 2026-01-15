function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Register
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-4"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-2 rounded mb-4"
        />

        {/* Send OTP */}
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Send OTP
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <span className="text-blue-600 cursor-pointer ml-1">
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;
