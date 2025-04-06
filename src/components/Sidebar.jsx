// components/Sidebar.js
// import React from "react";

// function Sidebar() {
//   return (
//     <aside className="bg-white p-4 rounded shadow-sm flex flex-col items-center sm:w-full md:w-1/4">
//       <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full">
//         <img
//           src="https://randomuser.me/api/portraits/men/1.jpg"
//           alt="Profile"
//           className="w-full h-full rounded-full"
//         />
//       </div>
//       <h2 className="font-semibold mt-2">Your Name</h2>
//       <p className="text-sm text-gray-500">Web Developer</p>
//       <hr className="my-4 w-full" />
//       <nav className="text-sm space-y-2 w-full">
//         <p className="text-blue-600 cursor-pointer hover:underline">Connections</p>
//         <p className="text-blue-600 cursor-pointer hover:underline">Groups</p>
//         <p className="text-blue-600 cursor-pointer hover:underline">Events</p>
//       </nav>
//     </aside>
//   );
// }

// export default Sidebar;



import React from "react";

// Sample user data
const userData = {
  name: "John Doe",
  title: "Software Engineer",
  profilePic: "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image from RandomUser.me
};

function Sidebar() {
  return (
    <aside className="bg-white p-4 rounded shadow-sm">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full">
          <img src={userData.profilePic} alt="Profile" className="w-full h-full rounded-full" />
        </div>
        <h2 className="font-semibold mt-2">{userData.name}</h2>
        <p className="text-sm text-gray-500">{userData.title}</p>
      </div>
      <hr className="my-4" />
      <nav className="text-sm space-y-2">
        <p className="text-blue-600 cursor-pointer hover:underline">Connections</p>
        <p className="text-blue-600 cursor-pointer hover:underline">Groups</p>
        <p className="text-blue-600 cursor-pointer hover:underline">Events</p>
      </nav>
    </aside>
  );
}

export default Sidebar;





// // components/Sidebar.js
// import React from "react";
// import { FaUser, FaUsers, FaClipboardList, FaCalendarAlt, FaBell } from "react-icons/fa";

// function Sidebar() {
//   return (
//     <aside className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center sm:w-full md:w-1/4">
//       {/* Profile */}
//       <div className="w-24 h-24 bg-gray-300 rounded-full mb-4">
//         <img
//           src="https://randomuser.me/api/portraits/men/1.jpg"
//           alt="Profile"
//           className="w-full h-full rounded-full object-cover"
//         />
//       </div>
//       <h2 className="font-semibold">Your Name</h2>
//       <p className="text-sm text-gray-500">Web Developer</p>

//       <hr className="my-4 w-full" />

//       {/* Sidebar Navigation */}
//       <nav className="w-full text-sm space-y-3">
//         <p className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-blue-600">
//           <FaUser />
//           <span>My Network</span>
//         </p>
//         <p className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-blue-600">
//           <FaUsers />
//           <span>Connections</span>
//         </p>
//         <p className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-blue-600">
//           <FaClipboardList />
//           <span>Jobs</span>
//         </p>
//         <p className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-blue-600">
//           <FaCalendarAlt />
//           <span>Events</span>
//         </p>
//         <p className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-blue-600">
//           <FaBell />
//           <span>Notifications</span>
//         </p>
//       </nav>
//     </aside>
//   );
// }

// export default Sidebar;
