import { ColumnDef } from "@tanstack/react-table";
import { TestStep } from "@/app/types/test";
import { StatusIcon } from "../status/StatusIcon";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<TestStep>[] = [
  {
    id: "status",
    header: "Status",
    cell: ({ row }) => <StatusIcon status={row.original.status} />,
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value === "" || row.original.status === value;
    },
  },
  {
    accessorKey: "testStep",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Test Step
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "session",
    header: "Session",
  },
  {
    accessorKey: "wait",
    header: "Wait(s)",
  },
  {
    accessorKey: "dataSheet",
    header: "Data Sheet",
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
  {
    accessorKey: "duration",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Duration (ms)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
