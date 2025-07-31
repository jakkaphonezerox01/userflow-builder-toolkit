import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User, LogOut } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="h-16 bg-gradient-card border-b border-border/50 flex items-center justify-between px-6 backdrop-blur-xl shadow-card">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg transition-all duration-200 interactive-button p-2" />
        <h1 className="text-xl font-semibold text-foreground animate-fade-in font-inter">{title}</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-emerald-500 text-sm animate-fade-in bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 backdrop-blur-sm">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="font-medium">2,847 ออนไลน์</span>
        </div>
        <ThemeToggle />
        <Button variant="ghost" className="text-muted-foreground hover:bg-accent hover:text-foreground gap-2 interactive-button">
          <User className="h-4 w-4" />
          ตัวตัดคุณ
        </Button>
        <Button className="bg-gradient-primary text-primary-foreground gap-2 shadow-glow hover:shadow-glow interactive-button font-medium">
          เข้าสู่ระบบ
        </Button>
      </div>
    </header>
  );
}