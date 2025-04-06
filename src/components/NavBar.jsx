import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Search, Bell, MessageSquare } from "lucide-react";

const NavBar = () => (
  <div className="flex items-center justify-between p-4 shadow-md bg-white w-full sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <span className="text-blue-600 text-2xl font-bold">LinkedIn</span>
      <div className="relative">
        <Search className="absolute top-2 left-2 text-gray-500" size={16} />
        <Input className="pl-8 w-64 md:w-96" placeholder="Search jobs, people, posts" />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Bell className="text-gray-700" />
      <MessageSquare className="text-gray-700" />
      <Avatar />
    </div>
  </div>
);

export default NavBar;
