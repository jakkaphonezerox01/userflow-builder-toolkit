import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  value: number;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export function StatsCard({ value, label, className = "", style }: StatsCardProps) {
  return (
    <Card className={`bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group animate-fade-in ${className}`} style={style}>
      <CardContent className="p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <div className="text-3xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-purple-300">{value}</div>
          <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}