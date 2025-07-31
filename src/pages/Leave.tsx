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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-2xl mx-auto p-6 relative z-10">
        <div className="animate-fade-in">
          <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 backdrop-blur-sm shadow-2xl">
            <CardHeader className="border-b border-gray-700/50 bg-gradient-to-r from-transparent to-purple-600/5">
              <CardTitle className="text-white text-2xl flex items-center gap-3">
                <FileText className="h-6 w-6 text-purple-400" />
                กรอกแบบฟอร์มแจ้งลา
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* เหตุผล */}
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">เหตุผล:</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="กรอกชื่อของคุณ"
                            className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20"
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
                      <FormItem>
                        <FormLabel className="text-white font-medium">ชื่อย่าน:</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="กรอกชื่อย่าน (ค่าปี)"
                            className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20"
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
                      <FormItem>
                        <FormLabel className="text-white font-medium">ประเภทการลา:</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white focus:border-purple-500/50 focus:ring-purple-500/20">
                              <SelectValue placeholder="เลือกประเภทการลา" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="sick" className="text-white hover:bg-gray-700">ลาป่วย</SelectItem>
                            <SelectItem value="personal" className="text-white hover:bg-gray-700">ลากิจ</SelectItem>
                            <SelectItem value="vacation" className="text-white hover:bg-gray-700">ลาพักร้อน</SelectItem>
                            <SelectItem value="emergency" className="text-white hover:bg-gray-700">ลาฉุกเฉิน</SelectItem>
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
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-white font-medium">วันที่เริ่มต้น:</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white hover:bg-gray-700 hover:text-white",
                                    !field.value && "text-gray-500"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {field.value ? format(field.value, "dd/MM/yyyy", { locale: th }) : "เลือกวันที่"}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                initialFocus
                                className="bg-gray-800 text-white pointer-events-auto"
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
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-white font-medium">วันที่สิ้นสุด:</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white hover:bg-gray-700 hover:text-white",
                                    !field.value && "text-gray-500"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {field.value ? format(field.value, "dd/MM/yyyy", { locale: th }) : "เลือกวันที่"}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => {
                                  const startDate = form.getValues("startDate");
                                  return startDate ? date < startDate : date < new Date(new Date().setHours(0, 0, 0, 0));
                                }}
                                initialFocus
                                className="bg-gray-800 text-white pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* เหตุผล */}
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">เหตุผล:</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="ระบุเหตุผล..."
                            className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20 min-h-[120px] resize-none"
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
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        กำลังส่ง...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        ส่งคำขอลา
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leave;