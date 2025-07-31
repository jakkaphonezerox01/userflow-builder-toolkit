import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, Package, Send, Truck } from "lucide-react";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const orderFormSchema = z.object({
  senderName: z.string().min(1, "กรุณากรอกชื่อคนส่ง"),
  district: z.string().min(1, "กรุณากรอกชื่อย่าน"),
  orderDate: z.date({
    required_error: "กรุณาเลือกวันที่สั่งซอง",
  }),
  packageType: z.string().min(1, "กรุณาเลือกประเภทกระสอง"),
  deliveryDetails: z.string().min(1, "กรุณาระบุแอปน์การส่ง"),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

const Orders = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      senderName: "",
      district: "",
      packageType: "",
      deliveryDetails: "",
    },
  });

  const onSubmit = async (data: OrderFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "ยืนยันการสั่งซองสำเร็จ",
        description: "คำสั่งซองของคุณได้รับการบันทึกแล้ว",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถส่งคำสั่งซองได้ กรุณาลองใหม่อีกครั้ง",
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
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-2xl mx-auto p-6 relative z-10">
        <div className="animate-fade-in">
          <Card className="bg-gradient-card border border-border/50 backdrop-blur-xl shadow-elegant hover:shadow-glow interactive-card">
            <CardHeader className="border-b border-border/50 bg-gradient-to-r from-transparent to-primary/5 pb-6">
              <CardTitle className="text-foreground text-2xl flex items-center gap-3 font-inter">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                สั่งซอง
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* ชื่อผู้ส่ง */}
                  <FormField
                    control={form.control}
                    name="senderName"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                          ชื่อผู้ส่ง:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="ชื่อของคุณ"
                            className="bg-gradient-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* อำเภอ */}
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                          ชื่อย่าน (ค่าปี):
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="กรอกชื่อย่าน"
                            className="bg-gradient-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* วันที่สั่ง */}
                  <FormField
                    control={form.control}
                    name="orderDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col group">
                        <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                          วันที่สั่งซอง:
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal bg-gradient-secondary border border-border text-foreground hover:bg-accent hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? format(field.value, "dd/MM/yyyy", { locale: th }) : "เลือกวันที่"}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-popover border border-border shadow-elegant backdrop-blur-xl" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ประเภทแพ็คเกจ */}
                  <FormField
                    control={form.control}
                    name="packageType"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                          ประเภทกระสอง:
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gradient-secondary border border-border text-foreground focus:border-primary/50 focus:ring-primary/20 hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter">
                              <SelectValue placeholder="กรุณาเลือกประเภท" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-popover border border-border shadow-elegant backdrop-blur-xl">
                            <SelectItem value="standard" className="hover:bg-accent font-inter">
                              กระสองมาตรฐาน
                            </SelectItem>
                            <SelectItem value="express" className="hover:bg-accent font-inter">
                              กระสองด่วน
                            </SelectItem>
                            <SelectItem value="premium" className="hover:bg-accent font-inter">
                              กระสองพิเศษ
                            </SelectItem>
                            <SelectItem value="bulk" className="hover:bg-accent font-inter">
                              กระสองขนาดใหญ่
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* รายละเอียดการส่ง */}
                  <FormField
                    control={form.control}
                    name="deliveryDetails"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                          รายละเอียดการส่ง:
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="กรอกรายละเอียดการส่ง เช่น ที่อยู่ ข้อกำหนดพิเศษ"
                            className="bg-gradient-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 hover:border-primary/30 transition-all duration-200 min-h-[120px] resize-none shadow-card hover:shadow-elegant font-inter"
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
                    className="w-full bg-gradient-primary text-primary-foreground font-medium py-4 shadow-glow hover:shadow-glow interactive-button text-lg font-inter"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                        กำลังส่ง...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        ยืนยันการสั่งซอง
                      </div>
                    )}
                  </Button>
                </form>
              </Form>

              {/* คำแนะนำ */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm text-foreground font-inter">
                    <p className="font-semibold mb-2 text-primary">คำแนะนำในการสั่งซอง:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• ตรวจสอบข้อมูลให้ครบถ้วนก่อนส่ง</li>
                      <li>• ระบุที่อยู่ให้ชัดเจนและถูกต้อง</li>
                      <li>• เลือกประเภทแพ็คเกจให้เหมาะสม</li>
                      <li>• คำสั่งจะได้รับการประมวลผลภายใน 2-3 วันทำการ</li>
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

export default Orders;