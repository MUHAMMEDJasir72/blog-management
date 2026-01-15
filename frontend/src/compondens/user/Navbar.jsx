function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold text-blue-600">BlogBook</h1>

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-full px-4 py-1 w-72"
        />

        <div className="flex gap-6">
          <button>Home</button>
          <button>My Blogs</button>
          <button>Profile</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
