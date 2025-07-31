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
    isActive ? "bg-white/20 text-white font-medium" : "text-white/80 hover:bg-white/10 hover:text-white";

  return (
    <Sidebar
      className={`${state === "collapsed" ? "w-14" : "w-60"} bg-gradient-to-b from-purple-800 to-purple-900 border-r-0`}
      collapsible="icon"
    >
      <SidebarContent>
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            {state !== "collapsed" && (
              <div>
                <div className="text-white font-bold">WAIGON</div>
                <div className="text-white/60 text-xs">[WG]</div>
              </div>
            )}
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-5 w-5" />
                      {state !== "collapsed" && <span className="ml-3">{item.title}</span>}
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