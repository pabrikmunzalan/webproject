import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SkeletonCard = () => {
  return (
    <Card className="animate-pulse">
      <CardHeader>
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="h-3 bg-muted rounded w-1/2"></div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="h-32 bg-muted rounded"></div>
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded"></div>
          <div className="h-3 bg-muted rounded w-5/6"></div>
        </div>
        <div className="h-9 bg-muted rounded"></div>
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;