interface ExecutionInfoProps {
  executionDate: string;
  startTime: string;
  endTime: string;
  duration: string;
}

export function ExecutionInfo({
  executionDate,
  startTime,
  endTime,
  duration,
}: ExecutionInfoProps) {
  return (
    <div className="text-sm space-y-1">
      <p>Executed on: {executionDate}</p>
      <p>Start Time: {startTime}</p>
      <p>End Time: {endTime}</p>
      <p>Duration: {duration}</p>
    </div>
  );
}
