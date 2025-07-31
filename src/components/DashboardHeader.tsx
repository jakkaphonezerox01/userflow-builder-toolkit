import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="h-16 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 border-b border-gray-700/50 flex items-center justify-between px-6 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-200 hover:scale-105" />
        <h1 className="text-xl font-semibold text-white animate-fade-in">{title}</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-green-400 text-sm animate-fade-in bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="font-medium">2,847 ออนไลน์</span>
        </div>
        <Button variant="ghost" className="text-gray-300 hover:bg-gray-800 hover:text-white gap-2 transition-all duration-200 hover:scale-105">
          <User className="h-4 w-4" />
          ตัวตัดคุณ
        </Button>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105 animate-glow">
          เข้าสู่ระบบ
        </Button>
      </div>
    </header>
  );
}