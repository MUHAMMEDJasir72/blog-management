function Otp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md text-center">

        <h2 className="text-2xl font-bold mb-4">
          Verify OTP
        </h2>

        <p className="text-gray-500 mb-6">
          Enter the 6 digit OTP sent to your email
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {[1,2,3,4,5,6].map(i => (
            <input
              key={i}
              maxLength="1"
              className="w-10 h-10 border text-center text-xl rounded"
            />
          ))}
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Verify
        </button>

      </div>
    </div>
  );
}

export default Otp;
