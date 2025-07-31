import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto p-6">
        {/* ภาพรวม Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">ภาพรวม</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard value={0} label="คำขออกดั้งนมี" />
            <StatsCard value={80} label="คำขับติดงนมี" />
            <StatsCard value={0} label="รายการส่อง" />
            <StatsCard value={0} label="รายการอยาวน" />
          </div>
        </section>

        {/* ข้อมูลของคุณ Section */}
        <section>
          <Card className="bg-gray-800/50 border-gray-600">
            <CardHeader>
              <CardTitle className="text-white text-xl">ข้อมูลของคุณ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">ชื่อผู้ใช้:</label>
                    <div className="text-white bg-gray-700/50 p-3 rounded-md border border-gray-600">
                      -
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">สถานะสิ่งที่นมี:</label>
                    <div className="text-white bg-gray-700/50 p-3 rounded-md border border-gray-600">
                      -
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">จำนวนครั้งที่ได้แปรง:</label>
                    <div className="text-white bg-gray-700/50 p-3 rounded-md border border-gray-600">
                      -
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">กลุ่ม:</label>
                    <div className="text-white bg-gray-700/50 p-3 rounded-md border border-gray-600">
                      -
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">จำนวนครั้งที่สามาร:</label>
                    <div className="text-white bg-gray-700/50 p-3 rounded-md border border-gray-600">
                      -
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
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
