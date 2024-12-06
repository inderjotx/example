"use client";

import { TestHeader } from "@/components/test-execution/header/TestHeader";
import { columns } from "@/components/test-execution/steps/columns";
import { DataTable } from "@/components/test-execution/steps/data-table";
import { testSteps } from "@/components/test-execution/data/mock-data";
import { TestDetails } from "@/components/test-execution/details/TestDetails";
import { Card } from "@/components/ui/card";

export default function Home() {
  const mockTestDetails = [
    {
      fieldName: "BodyLen",
      actual: "104",
      binary: "104",
      expected: "104",
      status: "pass",
    },
    {
      fieldName: "TemplateID",
      actual: "10022",
      binary: "10022",
      expected: "10022",
      status: "pass",
    },
    {
      fieldName: "RequestTime",
      actual: "7.869421543",
      binary: "7.869421543",
      expected: "7.869421543",
      status: "pass",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <TestHeader
        title="SC18 EQ MPP Passivated "
        totalScenarios={1}
        passed={1}
        failed={0}
        errors={0}
        notExecuted={0}
        executionDate="30 November 2024"
        startTime="16:14:26"
        endTime="16:22:11"
        duration="00:07:45"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <Card className="p-4">
            <DataTable columns={columns} data={testSteps} />
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-4">Test Details</h3>
            <TestDetails details={mockTestDetails as unknown as any} />
          </Card>
        </div>
      </div>
    </div>
  );
}
