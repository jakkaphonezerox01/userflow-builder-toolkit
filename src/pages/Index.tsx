import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  // ข้อมูลตัวอย่างผู้ใช้
  const users = [
    { id: 1, name: "นางสาวสุภาพร แก้วใส", email: "suphaporn@email.com", role: "Admin", status: "active" },
    { id: 2, name: "นายวิชัย เจริญเจษฎา", email: "wichai@email.com", role: "User", status: "active" },
    { id: 3, name: "นางสาวมาลี ดอกไม้", email: "malee@email.com", role: "Manager", status: "inactive" },
    { id: 4, name: "นายสมชาย ใจดี", email: "somchai@email.com", role: "User", status: "active" },
    { id: 5, name: "นางสาวนิรมล สวยงาม", email: "niramal@email.com", role: "User", status: "pending" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">ใช้งาน</Badge>;
      case "inactive":
        return <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-100">ไม่ใช้งาน</Badge>;
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">รอดำเนินการ</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Admin":
        return <Badge variant="default" className="bg-purple-100 text-purple-800 hover:bg-purple-100">ผู้ดูแลระบบ</Badge>;
      case "Manager":
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">ผู้จัดการ</Badge>;
      case "User":
        return <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">ผู้ใช้งาน</Badge>;
      default:
        return <Badge variant="outline">{role}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">จัดการผู้ใช้งาน</CardTitle>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                เพิ่มผู้ใช้ใหม่
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="ค้นหาผู้ใช้..." className="pl-10" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ลำดับ</TableHead>
                  <TableHead>ชื่อผู้ใช้</TableHead>
                  <TableHead>อีเมล</TableHead>
                  <TableHead>บทบาท</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead className="text-right">การจัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>{getRoleBadge(user.role)}</TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Edit className="h-4 w-4" />
                          แก้ไข
                        </Button>
                        <Button variant="destructive" size="sm" className="gap-2">
                          <Trash2 className="h-4 w-4" />
                          ลบ
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
