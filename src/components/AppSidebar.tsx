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
    isActive ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg mx-2" : "text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg mx-2 transition-colors duration-200";

  return (
    <Sidebar
      className={`${state === "collapsed" ? "w-14" : "w-64"} bg-gray-900 border-r border-gray-800`}
      collapsible="icon"
    >
      <SidebarContent className="bg-gray-900">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            {state !== "collapsed" && (
              <div>
                <div className="text-white font-bold text-sm">WAIGON</div>
                <div className="text-gray-400 text-xs">[WG]</div>
              </div>
            )}
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4 space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-5 w-5" />
                      {state !== "collapsed" && <span className="ml-3 font-medium">{item.title}</span>}
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