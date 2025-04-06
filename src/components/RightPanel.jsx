import React from "react";

function RightPanel() {
  return (
    <aside className="bg-white p-4 rounded shadow-sm">
      <h2 className="font-semibold mb-2">People You May Know</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <p>Alex Johnson</p>
          </div>
          <button className="text-blue-600 text-sm hover:underline">Connect</button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <p>Maria Gomez</p>
          </div>
          <button className="text-blue-600 text-sm hover:underline">Connect</button>
        </div>
      </div>
     </aside>
  );
}

export default RightPanel;


