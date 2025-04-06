import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 mt-4 px-4">
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
        <div className="w-full md:w-1/2">
          <Feed />
        </div>
        <div className="w-full md:w-1/4">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
  
