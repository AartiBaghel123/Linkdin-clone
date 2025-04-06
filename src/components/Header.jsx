// import React from "react";

// function Header() {
//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
//       <h1 className="text-xl font-bold text-blue-600">LinkedIn</h1>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="border border-gray-300 rounded px-4 py-1 w-1/2 max-w-md"
//       />
//     </header>
//   );
// }

// export default Header;



// components/Header.js
// import React from "react";

// function Header() {
//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
//       <h1 className="text-xl font-bold text-blue-600">LinkedIn</h1>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="border border-gray-300 rounded px-4 py-1 w-1/2 max-w-md sm:w-2/3 md:w-1/2 lg:w-1/3"
//       />
//     </header>
//   );
// }

// export default Header;



// components/Header.js
// import React from "react";
// import { FaLinkedin, FaSearch, FaHome, FaSuitcase, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";

// function Header() {
//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
//       {/* LinkedIn Logo */}
//       <div className="flex items-center space-x-2">
//         <FaLinkedin className="text-blue-600 text-3xl" />
//         <h1 className="text-xl font-bold text-blue-600">LinkedIn</h1>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 w-1/2 max-w-md">
//         <FaSearch className="text-gray-500" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="ml-2 w-full outline-none"
//         />
//       </div>

//       {/* Navigation */}
//       <div className="flex space-x-6 text-gray-600">
//         <FaHome className="cursor-pointer hover:text-blue-600" />
//         <FaSuitcase className="cursor-pointer hover:text-blue-600" />
//         <FaBell className="cursor-pointer hover:text-blue-600" />
//         <FaEnvelope className="cursor-pointer hover:text-blue-600" />
//         <FaUserCircle className="cursor-pointer hover:text-blue-600 text-2xl" />
//       </div>
//     </header>
//   );
// }

// export default Header;



import React from "react";
import { FaLinkedin, FaSearch, FaHome, FaSuitcase, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-blue-800 text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <FaLinkedin className="text-white text-3xl" />
        <h1 className="text-2xl ml-2">LinkedIn</h1>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg px-4 py-2 w-96"
        />
        <FaSearch className="text-white" />
        <FaHome className="text-white text-2xl" />
        <FaSuitcase className="text-white text-2xl" />
        <FaEnvelope className="text-white text-2xl" />
        <FaBell className="text-white text-2xl" />
        <FaUserCircle className="text-white text-2xl" />
      </div>
    </header>
  );
}

export default Header;
