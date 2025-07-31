import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import { Activity, Users, AlertTriangle, CheckCircle, TrendingUp, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background relative">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/6 right-1/6 w-32 h-32 bg-primary/6 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto p-6 relative z-10">
        {/* Enhanced Server Status Bar */}
        <div className="mb-8 animate-fade-in">
          <Card className="bg-gradient-card border border-border/50 backdrop-blur-xl shadow-elegant hover:shadow-glow interactive-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                      <Activity className="h-5 w-5 text-emerald-500 animate-pulse group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <div>
                      <span className="text-foreground font-semibold text-sm">สถานะเซิร์ฟเวอร์</span>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-500 font-bold bg-emerald-500/10 px-3 py-1 rounded-full text-sm border border-emerald-500/20">ดีเยี่ยม</span>
                        <span className="text-muted-foreground text-xs">อัพไทม์ 99.9%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-px h-12 bg-border"></div>
                  
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <Users className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm">ผู้เล่นออนไลน์</span>
                      <div className="text-foreground font-bold text-lg">247</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <span className="font-medium">AI Moderation เปิดใช้งาน</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Overview Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground animate-fade-in font-inter">ภาพรวม</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard value={0} label="คำขออกดั้งนมี" className="animate-fade-in" style={{ animationDelay: '100ms' }} />
            <StatsCard value={80} label="คำขับติดงนมี" className="animate-fade-in" style={{ animationDelay: '200ms' }} />
            <StatsCard value={0} label="รายการส่อง" className="animate-fade-in" style={{ animationDelay: '300ms' }} />
            <StatsCard value={0} label="รายการอยาวน" className="animate-fade-in" style={{ animationDelay: '400ms' }} />
          </div>
        </section>

        {/* Enhanced User Information Section */}
        <section className="animate-fade-in" style={{ animationDelay: '500ms' }}>
          <Card className="bg-gradient-card border border-border/50 backdrop-blur-xl shadow-elegant hover:shadow-glow interactive-card">
            <CardHeader className="border-b border-border/50 bg-gradient-to-r from-transparent to-primary/5 pb-6">
              <CardTitle className="text-foreground text-2xl flex items-center gap-3 font-inter">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                ข้อมูลของคุณ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-muted-foreground text-sm mb-3 font-medium group-hover:text-primary transition-colors duration-200">ชื่อผู้ใช้:</label>
                    <div className="text-foreground bg-gradient-secondary p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter">
                      -
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-muted-foreground text-sm mb-3 font-medium group-hover:text-primary transition-colors duration-200">สถานะสิ่งที่นมี:</label>
                    <div className="text-foreground bg-gradient-secondary p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter">
                      -
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-muted-foreground text-sm mb-3 font-medium group-hover:text-primary transition-colors duration-200">จำนวนครั้งที่ได้แปรง:</label>
                    <div className="text-foreground bg-gradient-secondary p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter">
                      -
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-muted-foreground text-sm mb-3 font-medium group-hover:text-primary transition-colors duration-200">กลุ่ม:</label>
                    <div className="text-foreground bg-gradient-secondary p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter">
                      -
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-muted-foreground text-sm mb-3 font-medium group-hover:text-primary transition-colors duration-200">จำนวนครั้งที่สามาร:</label>
                    <div className="text-foreground bg-gradient-secondary p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter">
                      -
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-muted-foreground text-sm mb-3 font-medium group-hover:text-primary transition-colors duration-200">สถิติรายเดือน:</label>
                    <div className="text-foreground bg-gradient-secondary p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm text-muted-foreground">อัพเดทล่าสุด: วันนี้</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-border/50 mt-8">
                <div className="flex gap-4 flex-wrap">
                  <Button className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-glow interactive-button font-medium">
                    ดูรายละเอียดคำรับของนัิน
                  </Button>
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 interactive-button">
                    ส่งออกข้อมูล
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
