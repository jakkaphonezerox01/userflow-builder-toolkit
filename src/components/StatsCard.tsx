import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  value: number;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export function StatsCard({ value, label, className = "", style }: StatsCardProps) {
  return (
    <Card className={`bg-gradient-card border border-border/50 hover:border-primary/30 interactive-card shadow-card hover:shadow-elegant group animate-fade-in ${className}`} style={style}>
      <CardContent className="p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-300"></div>
        <div className="relative">
          <div className="text-3xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary font-inter">{value.toLocaleString()}</div>
          <div className="text-muted-foreground text-sm font-medium group-hover:text-foreground/80 transition-colors duration-300">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}