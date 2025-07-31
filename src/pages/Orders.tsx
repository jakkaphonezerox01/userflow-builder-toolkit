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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-2xl mx-auto p-6 relative z-10">
        <div className="animate-fade-in">
          <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 backdrop-blur-sm shadow-2xl hover:border-purple-500/30 transition-all duration-300">
            <CardHeader className="border-b border-gray-700/50 bg-gradient-to-r from-transparent to-purple-600/5">
              <CardTitle className="text-white text-2xl flex items-center gap-3">
                <Package className="h-6 w-6 text-purple-400" />
                กรอกแบบฟอร์มสั่งซอง
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* ชื่อคนส่ง */}
                  <FormField
                    control={form.control}
                    name="senderName"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-white font-medium group-hover:text-purple-400 transition-colors duration-200">
                          ชื่อคนส่ง:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="ชื่อของคุณ"
                            className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20 hover:border-purple-500/30 transition-all duration-200"
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
                    name="district"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-white font-medium group-hover:text-purple-400 transition-colors duration-200">
                          ชื่อย่าน (ค่าปี):
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="กรอกชื่อย่าน"
                            className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20 hover:border-purple-500/30 transition-all duration-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* วันที่สั่งซอง */}
                  <FormField
                    control={form.control}
                    name="orderDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col group">
                        <FormLabel className="text-white font-medium group-hover:text-purple-400 transition-colors duration-200">
                          วันที่สั่งซอง:
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white hover:bg-gray-700 hover:text-white hover:border-purple-500/30 transition-all duration-200",
                                  !field.value && "text-gray-500"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? format(field.value, "dd/MM/yyyy", { locale: th }) : "เลือกวันที่"}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700 shadow-2xl" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                              initialFocus
                              className="bg-gray-800 text-white pointer-events-auto rounded-lg"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ประเภทกระสอง */}
                  <FormField
                    control={form.control}
                    name="packageType"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-white font-medium group-hover:text-purple-400 transition-colors duration-200">
                          ประเภทกระสอง:
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white focus:border-purple-500/50 focus:ring-purple-500/20 hover:border-purple-500/30 transition-all duration-200">
                              <SelectValue placeholder="กรุณาเลือกประเภท" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-700 shadow-2xl">
                            <SelectItem value="standard" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                              กระสองมาตรฐาน
                            </SelectItem>
                            <SelectItem value="express" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                              กระสองด่วน
                            </SelectItem>
                            <SelectItem value="premium" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                              กระสองพิเศษ
                            </SelectItem>
                            <SelectItem value="bulk" className="text-white hover:bg-gray-700 focus:bg-gray-700">
                              กระสองขนาดใหญ่
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* แอปน์การส่ง */}
                  <FormField
                    control={form.control}
                    name="deliveryDetails"
                    render={({ field }) => (
                      <FormItem className="group">
                        <FormLabel className="text-white font-medium group-hover:text-purple-400 transition-colors duration-200">
                          แอปน์การส่ง:
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="กดเพื่อแอปน์ตำาง"
                            className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20 hover:border-purple-500/30 transition-all duration-200 min-h-[120px] resize-none"
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
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-4 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105 text-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        กำลังส่ง...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Truck className="h-5 w-5" />
                        ยืนยันการสั่งซอง
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

export default Orders;