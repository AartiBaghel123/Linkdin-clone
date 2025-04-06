// // components/Feed.js
// import React from "react";
// import Post from "./Post";

// function Feed() {
//   return (
//     <main className="space-y-4 sm:w-full md:w-1/2">
//       <div className="bg-white p-4 rounded shadow-sm">
//         <textarea
//           placeholder="Start a post..."
//           className="w-full border p-2 rounded resize-none"
//         />
//         <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
//           Post
//         </button>
//       </div>
//       <Post />
//       <Post />
//     </main>
//   );
// }

// export default Feed;


import React, { useState, useEffect } from "react";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}

export default Feed;



// import React from "react";
// import Post from "./Post";

// function Feed() {
//   return (
//     <main className="w-2/4 space-y-4 p-4">
//       <div className="bg-white p-4 rounded shadow-sm">
//         <textarea
//           placeholder="Start a post..."
//           className="w-full p-2 border rounded"
//         />
//         <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Post</button>
//       </div>

//       {/* Example Post */}
//       <Post />
//       <Post />
//     </main>
//   );
// }

// export default Feed;
