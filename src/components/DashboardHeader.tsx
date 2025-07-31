import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg" />
        <h1 className="text-xl font-semibold text-white">{title}</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>2,847 ออนไลน์</span>
        </div>
        <Button variant="ghost" className="text-gray-300 hover:bg-gray-800 hover:text-white gap-2">
          <User className="h-4 w-4" />
          ตัวตัดคุณ
        </Button>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white gap-2">
          เข้าสู่ระบบ
        </Button>
      </div>
    </header>
  );
}