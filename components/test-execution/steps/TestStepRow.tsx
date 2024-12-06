import { TableCell, TableRow } from "@/components/ui/table";
import { TestStep } from "@/app/types/test";
import { StatusIcon } from "../status/StatusIcon";

interface TestStepRowProps {
  step: TestStep;
}

export function TestStepRow({ step }: TestStepRowProps) {
  return (
    <TableRow>
      <TableCell>
        <StatusIcon status={step.status} />
      </TableCell>
      <TableCell>{step.testStep}</TableCell>
      <TableCell>{step.description}</TableCell>
      <TableCell>{step.session}</TableCell>
      <TableCell>{step.wait}</TableCell>
      <TableCell>{step.dataSheet}</TableCell>
      <TableCell>{step.startTime}</TableCell>
      <TableCell>{step.endTime}</TableCell>
      <TableCell>{step.duration}</TableCell>
    </TableRow>
  );
}
