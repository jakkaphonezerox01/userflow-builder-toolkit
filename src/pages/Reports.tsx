import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FileText, Send, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const reportFormSchema = z.object({
  reportTitle: z.string().min(1, "กรุณากรอกหัวข้อรายงาน"),
  reportDetails: z.string().min(10, "กรุณากรอกรายละเอียดอย่างน้อย 10 ตัวอักษร"),
});

type ReportFormValues = z.infer<typeof reportFormSchema>;

const Reports = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ReportFormValues>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: {
      reportTitle: "",
      reportDetails: "",
    },
  });

  const onSubmit = async (data: ReportFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "ส่งรายงานสำเร็จ",
        description: "รายงานของคุณได้รับการส่งแล้ว ขอบคุณสำหรับข้อมูล",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถส่งรายงานได้ กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-2xl mx-auto p-6 relative z-10">
        <div className="animate-fade-in">
          <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 backdrop-blur-sm shadow-2xl hover:border-red-500/30 transition-all duration-300">
            <CardHeader className="border-b border-gray-700/50 bg-gradient-to-r from-transparent to-red-600/5">
              <CardTitle className="text-white text-2xl flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-red-400" />
                ส่งรายงาน
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* หัวข้อรายงาน */}
                  <FormField
                    control={form.control}
                    name="reportTitle"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-white font-medium group-hover:text-red-400 transition-colors duration-200">
                          หัวข้อรายงาน:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="หัวข้อเรื่องที่ต้องการรายงาน"
                            className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:ring-red-500/20 hover:border-red-500/30 transition-all duration-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* รายละเอียดรายงาน */}
                  <FormField
                    control={form.control}
                    name="reportDetails"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-white font-medium group-hover:text-red-400 transition-colors duration-200">
                          รายละเอียดรายงาน:
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="กรอกรายละเอียดที่องมุด"
                            className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:ring-red-500/20 hover:border-red-500/30 transition-all duration-200 min-h-[150px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ปุ่มส่ง */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium py-4 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 hover:scale-105 text-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        กำลังส่ง...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        ส่งรายงาน
                      </div>
                    )}
                  </Button>
                </form>
              </Form>

              {/* คำแนะนำ */}
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <div className="text-sm text-yellow-100">
                    <p className="font-medium mb-1">คำแนะนำในการรายงาน:</p>
                    <ul className="space-y-1 text-yellow-200">
                      <li>• ระบุรายละเอียดให้ชัดเจนและครบถ้วน</li>
                      <li>• หากเป็นเรื่องเร่งด่วน กรุณาติดต่อแอดมินโดยตรง</li>
                      <li>• รายงานจะได้รับการตรวจสอบภายใน 24 ชั่วโมง</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;