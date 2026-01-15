import Navbar from '../../compondens/user/Navbar'
import BlogPosts from '../../compondens/user/BlogPosts';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 mt-6">

        {/* Left Sidebar */}
        <div className="col-span-3 hidden md:block">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold">Profile</h3>
            <p>Jasir</p>
            <p>Full Stack Developer</p>
          </div>
        </div>

        {/* Feed */}
        <div className="col-span-12 md:col-span-6">
          <BlogPosts/>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 hidden md:block">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold mb-2">Suggestions</h3>
            <p>Follow Devs</p>
            <p>Trending Blogs</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home
