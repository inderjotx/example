import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TestStep } from "@/app/types/test";
import { TestStepRow } from "./TestStepRow";

interface TestStepsTableProps {
  steps: TestStep[];
}

export function TestStepsTable({ steps }: TestStepsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Status</TableHead>
          <TableHead>Test Step</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Session</TableHead>
          <TableHead>Wait(s)</TableHead>
          <TableHead>Data Sheet</TableHead>
          <TableHead>Start Time</TableHead>
          <TableHead>End Time</TableHead>
          <TableHead>Duration (ms)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {steps.map((step) => (
          <TestStepRow key={step.id} step={step} />
        ))}
      </TableBody>
    </Table>
  );
}
