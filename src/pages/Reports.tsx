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
    <div className="min-h-screen bg-gradient-background relative">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-destructive/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-destructive/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-destructive/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-2xl mx-auto p-6 relative z-10">
        <div className="animate-fade-in">
          <Card className="bg-gradient-card border border-border/50 backdrop-blur-xl shadow-elegant hover:shadow-glow interactive-card">
            <CardHeader className="border-b border-border/50 bg-gradient-to-r from-transparent to-destructive/5 pb-6">
              <CardTitle className="text-foreground text-2xl flex items-center gap-3 font-inter">
                <div className="p-2 bg-destructive/10 rounded-lg border border-destructive/20">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
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
                        <FormLabel className="text-foreground font-medium group-hover:text-destructive transition-colors duration-200 font-inter">
                          หัวข้อรายงาน:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="หัวข้อเรื่องที่ต้องการรายงาน"
                            className="bg-gradient-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-destructive/50 focus:ring-destructive/20 hover:border-destructive/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter"
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
                        <FormLabel className="text-foreground font-medium group-hover:text-destructive transition-colors duration-200 font-inter">
                          รายละเอียดรายงาน:
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="กรอกรายละเอียดที่องมุด"
                            className="bg-gradient-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-destructive/50 focus:ring-destructive/20 hover:border-destructive/30 transition-all duration-200 min-h-[150px] resize-none shadow-card hover:shadow-elegant font-inter"
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
                    className="w-full bg-gradient-to-r from-destructive to-red-600 hover:from-destructive/90 hover:to-red-700 text-destructive-foreground font-medium py-4 shadow-lg shadow-destructive/25 hover:shadow-destructive/40 interactive-button text-lg font-inter"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-destructive-foreground"></div>
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
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-500/5 to-orange-500/10 border border-amber-500/20 rounded-lg backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                  </div>
                  <div className="text-sm text-foreground font-inter">
                    <p className="font-semibold mb-2 text-amber-600 dark:text-amber-400">คำแนะนำในการรายงาน:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• ระบุรายละเอียดให้ชัดเจนและครบถ้วน</li>
                      <li>• หากเป็นเรื่องเร่งด่วน กรุณาติดต่อแอดมินโดยตรง</li>
                      <li>• รายงานจะได้รับการตรวจสอบภายใน 24 ชั่วโมง</li>
                      <li>• ใช้ภาษาที่สุภาพและสร้างสรรค์</li>
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