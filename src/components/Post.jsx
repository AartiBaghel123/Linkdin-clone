import React from "react";
// Sample post data
const postData = [
  {
    id: 1,
    name: "John Doe",
    title: "Software Engineer",
    content: "Excited to be part of a new project with React and Tailwind CSS! #React #TailwindCSS",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Web Developer",
    content: "Learning how to build clones of popular websites. Here's my LinkedIn clone! #WebDevelopment",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg", // Placeholder image
  },
];

function Post() {
  return (
    <>
      {postData.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full">
              <img src={post.profilePic} alt="Profile" className="w-full h-full rounded-full" />
            </div>
            <div>
              <h3 className="font-semibold">{post.name}</h3>
              <p className="text-sm text-gray-500">{post.title}</p>
            </div>
          </div>
          <p className="mt-2 text-gray-700">{post.content}</p>
        </div>
      ))}
    </>
  );
}

export default Post;
