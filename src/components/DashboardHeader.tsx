import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="h-16 bg-gradient-to-r from-purple-800 to-purple-900 flex items-center justify-between px-6 text-white">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-white hover:bg-white/20" />
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" className="text-white hover:bg-white/20 gap-2">
          <User className="h-4 w-4" />
          ตัวตัดคุณ
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/20 gap-2">
          <LogOut className="h-4 w-4" />
          ออกจากระบบ
        </Button>
      </div>
    </header>
  );
}