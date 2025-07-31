import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  value: number;
  label: string;
  className?: string;
}

export function StatsCard({ value, label, className = "" }: StatsCardProps) {
  return (
    <Card className={`bg-gray-700/50 border-gray-600 ${className}`}>
      <CardContent className="p-6 text-center">
        <div className="text-4xl font-bold text-purple-300 mb-2">{value}</div>
        <div className="text-gray-300 text-sm">{label}</div>
      </CardContent>
    </Card>
  );
}