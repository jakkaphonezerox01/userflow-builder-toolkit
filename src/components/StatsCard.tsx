import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  value: number;
  label: string;
  className?: string;
}

export function StatsCard({ value, label, className = "" }: StatsCardProps) {
  return (
    <Card className={`bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-200 ${className}`}>
      <CardContent className="p-6">
        <div className="text-3xl font-bold text-white mb-2">{value}</div>
        <div className="text-gray-400 text-sm font-medium">{label}</div>
      </CardContent>
    </Card>
  );
}