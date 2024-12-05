"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const formSchema = z.object({
  testScenario: z.string().min(1),
  virtualUsers: z.array(z.number()),
  duration: z.string(),
  rampUpTime: z.string(),
  loadProfile: z.string(),
  targetUrl: z.string().url(),
  thinkTime: z.string(),
});

export function LoadExecutionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      testScenario: "",
      virtualUsers: [50],
      duration: "300",
      rampUpTime: "60",
      loadProfile: "",
      targetUrl: "",
      thinkTime: "3",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="testScenario"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Test Scenario</FormLabel>
                <FormControl>
                  <Input placeholder="Enter scenario name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="virtualUsers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Virtual Users</FormLabel>
                <FormControl>
                  <Slider
                    min={1}
                    max={1000}
                    step={1}
                    value={field.value}
                    onValueChange={field.onChange}
                    className="pt-4"
                  />
                </FormControl>
                <p className="text-sm text-muted-foreground text-right">
                  {field.value} users
                </p>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration (seconds)</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rampUpTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ramp-up Time (seconds)</FormLabel>
                <FormControl>
                  <Input type="number" min="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="loadProfile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Load Profile</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select load profile" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="constant">Constant</SelectItem>
                    <SelectItem value="rampUp">Ramp Up</SelectItem>
                    <SelectItem value="stepLoad">Step Load</SelectItem>
                    <SelectItem value="random">Random</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="targetUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target URL</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="https://example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="thinkTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Think Time (seconds)</FormLabel>
                <FormControl>
                  <Input type="number" min="0" step="0.1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end mt-6">
          <Button type="submit" className="">
            Start Load Test
          </Button>
        </div>
      </form>
    </Form>
  );
}
