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
      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg mx-2 shadow-lg shadow-purple-500/25" 
      : "text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:text-white rounded-lg mx-2 transition-all duration-200 ease-in-out hover:shadow-md";

  return (
    <Sidebar
      className={`${state === "collapsed" ? "w-14" : "w-64"} bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 border-r border-gray-700/50 transition-all duration-300 ease-in-out`}
      collapsible="icon"
    >
      <SidebarContent className="bg-transparent">
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg animate-glow">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            {state !== "collapsed" && (
              <div className="animate-fade-in">
                <div className="text-white font-bold text-sm">WAIGON</div>
                <div className="text-gray-400 text-xs">[WG]</div>
              </div>
            )}
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4 space-y-1">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={`${getNavCls({ isActive: isActive(item.url) })} group transition-all duration-200 ease-in-out transform hover:scale-105`}
                    >
                      <item.icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                      {state !== "collapsed" && (
                        <span className="ml-3 font-medium transition-all duration-200">
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
      </SidebarContent>
    </Sidebar>
  );
}