import { Badge } from "@/components/ui/badge";

interface TestStatsProps {
  totalScenarios: number;
  passed: number;
  failed: number;
  errors: number;
  notExecuted: number;
}

export function TestStats({
  totalScenarios,
  passed,
  failed,
  errors,
  notExecuted,
}: TestStatsProps) {
  return (
    <div className="flex gap-4">
      <Badge variant="outline">Total: {totalScenarios}</Badge>
      <Badge variant="success">Pass: {passed}</Badge>
      <Badge variant="destructive">Fail: {failed}</Badge>
      <Badge variant="warning">Error: {errors}</Badge>
      <Badge variant="secondary">Not Executed: {notExecuted}</Badge>
    </div>
  );
}
