import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import { Activity, Users, AlertTriangle, CheckCircle, TrendingUp, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto p-6 relative z-10">
        {/* Server Status Bar */}
        <div className="mb-6 animate-fade-in">
          <Card className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 group">
                    <Activity className="h-5 w-5 text-green-400 animate-pulse group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-white font-medium">สถานะเซิร์ฟเวอร์</span>
                    <span className="text-green-400 font-semibold bg-green-400/10 px-2 py-1 rounded-full text-sm">ดีเยี่ยม</span>
                  </div>
                  <div className="w-px h-6 bg-gray-600"></div>
                  <div className="flex items-center gap-2 group">
                    <Users className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-300">ผู้เล่นออนไลน์</span>
                    <span className="text-white font-bold bg-blue-400/10 px-2 py-1 rounded-full text-sm">247</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  AI Moderation เปิดใช้งาน
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ภาพรวม Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 animate-fade-in">
            <TrendingUp className="h-6 w-6 text-purple-400 animate-bounce" />
            ภาพรวม
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard value={0} label="คำขออกดั้งนมี" className="animate-fade-in" style={{ animationDelay: '100ms' }} />
            <StatsCard value={80} label="คำขับติดงนมี" className="animate-fade-in" style={{ animationDelay: '200ms' }} />
            <StatsCard value={0} label="รายการส่อง" className="animate-fade-in" style={{ animationDelay: '300ms' }} />
            <StatsCard value={0} label="รายการอยาวน" className="animate-fade-in" style={{ animationDelay: '400ms' }} />
          </div>
        </section>

        {/* ข้อมูลของคุณ Section */}
        <section className="animate-fade-in" style={{ animationDelay: '500ms' }}>
          <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 shadow-2xl">
            <CardHeader className="border-b border-gray-700/50 bg-gradient-to-r from-transparent to-purple-600/5">
              <CardTitle className="text-white text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                ข้อมูลของคุณ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-gray-400 text-sm mb-2 font-medium group-hover:text-purple-400 transition-colors duration-200">ชื่อผู้ใช้:</label>
                    <div className="text-white bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10">
                      -
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-400 text-sm mb-2 font-medium group-hover:text-purple-400 transition-colors duration-200">สถานะสิ่งที่นมี:</label>
                    <div className="text-white bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10">
                      -
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-400 text-sm mb-2 font-medium group-hover:text-purple-400 transition-colors duration-200">จำนวนครั้งที่ได้แปรง:</label>
                    <div className="text-white bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10">
                      -
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-gray-400 text-sm mb-2 font-medium group-hover:text-purple-400 transition-colors duration-200">กลุ่ม:</label>
                    <div className="text-white bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10">
                      -
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-400 text-sm mb-2 font-medium group-hover:text-purple-400 transition-colors duration-200">จำนวนครั้งที่สามาร:</label>
                    <div className="text-white bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10">
                      -
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-700/50 mt-6">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105 animate-glow">
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
