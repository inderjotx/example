import { Card, CardContent } from "@/components/ui/card";
import { TestStats } from "./TestStats";
import { ExecutionInfo } from "./ExecutionInfo";

interface TestHeaderProps {
  title: string;
  totalScenarios: number;
  passed: number;
  failed: number;
  errors: number;
  notExecuted: number;
  executionDate: string;
  startTime: string;
  endTime: string;
  duration: string;
}

export function TestHeader(props: TestHeaderProps) {
  const {
    title,
    totalScenarios,
    passed,
    failed,
    errors,
    notExecuted,
    executionDate,
    startTime,
    endTime,
    duration,
  } = props;

  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl">{title}</h2>
            <TestStats
              totalScenarios={totalScenarios}
              passed={passed}
              failed={failed}
              errors={errors}
              notExecuted={notExecuted}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
