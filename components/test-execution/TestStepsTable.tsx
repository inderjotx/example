import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TestStep } from "@/app/types/test";
import { CheckCircle, XCircle, AlertCircle, MinusCircle } from "lucide-react";

interface TestStepsTableProps {
  steps: TestStep[];
}

export function TestStepsTable({ steps }: TestStepsTableProps) {
  const getStatusIcon = (status: TestStep["status"]) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "fail":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <MinusCircle className="h-4 w-4 text-gray-500" />;
    }
  };

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
          <TableRow key={step.id}>
            <TableCell>{getStatusIcon(step.status)}</TableCell>
            <TableCell>{step.testStep}</TableCell>
            <TableCell>{step.description}</TableCell>
            <TableCell>{step.session}</TableCell>
            <TableCell>{step.wait}</TableCell>
            <TableCell>{step.dataSheet}</TableCell>
            <TableCell>{step.startTime}</TableCell>
            <TableCell>{step.endTime}</TableCell>
            <TableCell>{step.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
