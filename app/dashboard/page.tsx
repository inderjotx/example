import { TestConfigForm } from "./forms/test-execution";
import { APIConfigForm } from "./forms/api-configuration";
import { EmptySidebar } from "@/components/app-sidebar";
import { ExecutionForm } from "./forms/execution-form";
import { LoadExecutionForm } from "./forms/load-execution";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex gap-2">
      <EmptySidebar />
      <div className="flex flex-col gap-4 w-full">
        <Tabs defaultValue="api-configuration" className="w-full">
          <div className="flex justify-center w-full">
            <TabsList className="inline-block">
              <TabsTrigger value="api-configuration">
                API Configuration
              </TabsTrigger>
              <TabsTrigger value="test-configuration">
                Test Configuration
              </TabsTrigger>
              <TabsTrigger value="execution">Execution</TabsTrigger>
              <TabsTrigger value="load-execution">Load Execution</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="api-configuration">
            <Card>
              <CardHeader>
                <CardTitle>API Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <APIConfigForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="test-configuration">
            <Card>
              <CardHeader>
                <CardTitle>Test Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <TestConfigForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="execution">
            <Card>
              <CardHeader>
                <CardTitle>Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <ExecutionForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="load-execution">
            <Card>
              <CardHeader>
                <CardTitle>Load Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <LoadExecutionForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>{" "}
    </div>
  );
}
