import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, FileText, Send } from "lucide-react";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const leaveFormSchema = z.object({
  reason: z.string().min(1, "กรุณากรอกเหตุผล"),
  department: z.string().min(1, "กรุณากรอกชื่อย่าน"),
  leaveType: z.string().min(1, "กรุณาเลือกประเภทการลา"),
  startDate: z.date({
    required_error: "กรุณาเลือกวันที่เริ่มต้น",
  }),
  endDate: z.date({
    required_error: "กรุณาเลือกวันที่สิ้นสุด",
  }),
  details: z.string().min(1, "กรุณาระบุเหตุผล"),
});

type LeaveFormValues = z.infer<typeof leaveFormSchema>;

const Leave = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LeaveFormValues>({
    resolver: zodResolver(leaveFormSchema),
    defaultValues: {
      reason: "",
      department: "",
      leaveType: "",
      details: "",
    },
  });

  const onSubmit = async (data: LeaveFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "ส่งคำขอลาสำเร็จ",
        description: "คำขอลาของคุณได้รับการส่งแล้ว รอการอนุมัติ",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถส่งคำขอลาได้ กรุณาลองใหม่อีกครั้ง",
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
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                แจ้งลา
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* เหตุผลการลา */}
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                          เหตุผลการลา:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="กรอกเหตุผลการลา"
                            className="bg-gradient-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ชื่อย่าน */}
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                          ชื่อย่าน:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="กรอกชื่อย่าน (ค่าปี)"
                            className="bg-gradient-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ประเภทการลา */}
                  <FormField
                    control={form.control}
                    name="leaveType"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                          ประเภทการลา:
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gradient-secondary border border-border text-foreground focus:border-primary/50 focus:ring-primary/20 hover:border-primary/30 transition-all duration-200 shadow-card hover:shadow-elegant font-inter">
                              <SelectValue placeholder="เลือกประเภทการลา" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-popover border border-border shadow-elegant backdrop-blur-xl">
                            <SelectItem value="sick" className="hover:bg-accent font-inter">ลาป่วย</SelectItem>
                            <SelectItem value="personal" className="hover:bg-accent font-inter">ลากิจ</SelectItem>
                            <SelectItem value="vacation" className="hover:bg-accent font-inter">ลาพักร้อน</SelectItem>
                            <SelectItem value="emergency" className="hover:bg-accent font-inter">ลาฉุกเฉิน</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* วันที่เริ่มต้นและสิ้นสุด */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col group">
                          <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                            วันที่เริ่มต้น:
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

                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col group">
                          <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                            วันที่สิ้นสุด:
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
                                disabled={(date) => {
                                  const startDate = form.getValues("startDate");
                                  return startDate ? date < startDate : date < new Date(new Date().setHours(0, 0, 0, 0));
                                }}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* รายละเอียดเพิ่มเติม */}
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 font-inter">
                          รายละเอียดเพิ่มเติม:
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="ระบุเหตุผลและรายละเอียดเพิ่มเติม..."
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
                        ส่งคำขอลา
                      </div>
                    )}
                  </Button>
                </form>
              </Form>

              {/* คำแนะนำ */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm text-foreground font-inter">
                    <p className="font-semibold mb-2 text-primary">คำแนะนำในการลา:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• กรุณาแจ้งล่วงหน้าอย่างน้อย 1 วัน</li>
                      <li>• ระบุเหตุผลให้ชัดเจนและครบถ้วน</li>
                      <li>• ตรวจสอบวันที่ให้ถูกต้องก่อนส่ง</li>
                      <li>• คำขอจะได้รับการพิจารณาภายใน 24 ชั่วโมง</li>
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

export default Leave;