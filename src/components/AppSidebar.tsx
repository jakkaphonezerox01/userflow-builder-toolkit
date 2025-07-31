import { Home, FileText, Package, BarChart3 } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "แผงหลัก", url: "/", icon: Home },
  { title: "แจ้งลา", url: "/leave", icon: FileText },
  { title: "สั่งซอง", url: "/orders", icon: Package },
  { title: "รายงาน", url: "/reports", icon: BarChart3 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-primary-foreground font-semibold rounded-xl mx-3 shadow-glow border border-primary/20" 
      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-xl mx-3 interactive-button";

  return (
    <Sidebar
      className={`${state === "collapsed" ? "w-0" : "w-64"} bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out overflow-hidden shadow-elegant`}
      collapsible="icon"
    >
      <SidebarContent className="h-full">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow border border-primary/20">
              <span className="text-primary-foreground font-bold text-lg font-inter">W</span>
            </div>
            {state !== "collapsed" && (
              <div className="animate-fade-in">
                <div className="text-sidebar-foreground font-bold text-lg font-inter">WAIGON</div>
                <div className="text-sidebar-foreground/60 text-sm font-medium">[WG] ระบบจัดการ</div>
              </div>
            )}
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-6 space-y-2 px-3">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={`${getNavCls({ isActive: isActive(item.url) })} group p-3 transition-all duration-200`}
                    >
                      <item.icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                      {state !== "collapsed" && (
                        <span className="ml-3 font-medium transition-all duration-200 font-inter">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Footer */}
        <div className="mt-auto p-6 border-t border-sidebar-border">
          {state !== "collapsed" && (
            <div className="text-sidebar-foreground/60 text-xs text-center font-inter">
              <div className="mb-1">เวอร์ชัน 2.1.0</div>
              <div>© 2024 WAIGON System</div>
            </div>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}