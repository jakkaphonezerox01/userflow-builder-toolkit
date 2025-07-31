import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import { Activity, Users, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto p-6">
        {/* Server Status Bar */}
        <div className="mb-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-400" />
                    <span className="text-white font-medium">สถานะเซิร์ฟเวอร์</span>
                    <span className="text-green-400 font-semibold">ดีเยี่ยม</span>
                  </div>
                  <div className="w-px h-6 bg-gray-600"></div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">ผู้เล่นออนไลน์</span>
                    <span className="text-white font-bold">247</span>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  AI Moderation เปิดใช้งาน
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ภาพรวม Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-purple-400" />
            ภาพรวม
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard value={0} label="คำขออกดั้งนมี" />
            <StatsCard value={80} label="คำขับติดงนมี" />
            <StatsCard value={0} label="รายการส่อง" />
            <StatsCard value={0} label="รายการอยาวน" />
          </div>
        </section>

        {/* ข้อมูลของคุณ Section */}
        <section>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="border-b border-gray-700">
              <CardTitle className="text-white text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                ข้อมูลของคุณ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-medium">ชื่อผู้ใช้:</label>
                    <div className="text-white bg-gray-900 p-3 rounded-lg border border-gray-700">
                      -
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-medium">สถานะสิ่งที่นมี:</label>
                    <div className="text-white bg-gray-900 p-3 rounded-lg border border-gray-700">
                      -
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-medium">จำนวนครั้งที่ได้แปรง:</label>
                    <div className="text-white bg-gray-900 p-3 rounded-lg border border-gray-700">
                      -
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-medium">กลุ่ม:</label>
                    <div className="text-white bg-gray-900 p-3 rounded-lg border border-gray-700">
                      -
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-medium">จำนวนครั้งที่สามาร:</label>
                    <div className="text-white bg-gray-900 p-3 rounded-lg border border-gray-700">
                      -
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-700 mt-6">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  ดูรายละเอียดคำรับของนัิน
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
