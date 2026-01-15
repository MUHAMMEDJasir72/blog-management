import React, { useState } from 'react'

function BlogPosts() {

  const [blogs] = useState([
    {
      id: 1,
      title:"My First Blog",
      image: "/minddoc-online-therapy-app-depression-taboos.png",
      author: "Jasir",
      content: "This is my first blog. I'm learning React and Tailwind CSS.",
    },
    {
      id: 2,
      title:"Learning Django",
      image: "/minddoc-online-therapy-app-depression-taboos.png",
      author: "Jasir",
      content: "Django is a powerful backend framework.",
    },
    {
      id: 3,
      title:"Brocamp Journey",
      image: "/minddoc-online-therapy-app-depression-taboos.png",
      author: "Jasir",
      content: "Brocamp helped me grow as a developer.",
    },
  ])

  return (
    <div className="flex justify-center mt-6">

      {/* Feed */}
      <div className="w-full max-w-xl space-y-5">

        {blogs.map(blog => (
          <div 
            key={blog.id}
            className="bg-white rounded-xl shadow p-4"
          >

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">{blog.author}</h3>
                <p className="text-sm text-gray-500">2 hrs ago</p>
              </div>
            </div>

            {/* Content */}
            <h2 className="font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-3">{blog.content}</p>

            {/* Image */}
            <img 
              src={blog.image} 
              className="rounded-lg w-full mb-3"
            />

            {/* Actions */}
            <div className="flex justify-between text-gray-600">
              <button>👍 Like</button>
              <button>💬 Comment</button>
              <button>↗ Share</button>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default BlogPosts
