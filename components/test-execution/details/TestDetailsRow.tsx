import { TableCell, TableRow } from "@/components/ui/table";
import { TestDetails } from "@/app/types/test";
import { StatusIcon } from "@/components/test-execution/status/StatusIcon";

interface TestDetailRowProps {
  detail: TestDetails;
}

export function TestDetailRow({ detail }: TestDetailRowProps) {
  return (
    <TableRow>
      <TableCell>
        <StatusIcon status={detail.status} />
      </TableCell>
      <TableCell>{detail.fieldName}</TableCell>
      <TableCell>{detail.actual}</TableCell>
      <TableCell>{detail.binary}</TableCell>
      <TableCell>{detail.expected}</TableCell>
    </TableRow>
  );
}
