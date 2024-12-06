import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TestDetails as TestDetailsType } from "@/app/types/test";
import { CheckCircle, XCircle, MinusCircle } from "lucide-react";

interface TestDetailsProps {
  details: TestDetailsType[];
}

export function TestDetails({ details }: TestDetailsProps) {
  const getStatusIcon = (status: TestDetailsType["status"]) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "fail":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <MinusCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Status</TableHead>
          <TableHead>Field Name</TableHead>
          <TableHead>Actual</TableHead>
          <TableHead>Binary</TableHead>
          <TableHead>Expected</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {details.map((detail, index) => (
          <TableRow key={index}>
            <TableCell>{getStatusIcon(detail.status)}</TableCell>
            <TableCell>{detail.fieldName}</TableCell>
            <TableCell>{detail.actual}</TableCell>
            <TableCell>{detail.binary}</TableCell>
            <TableCell>{detail.expected}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
