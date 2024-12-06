import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TestDetails as TestDetailsType } from "@/app/types/test";
import { TestDetailRow } from "./TestDetailsRow";

interface TestDetailsProps {
  details: TestDetailsType[];
}

export function TestDetails({ details }: TestDetailsProps) {
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
          <TestDetailRow key={index} detail={detail} />
        ))}
      </TableBody>
    </Table>
  );
}
