import { CheckCircle, XCircle, AlertCircle, MinusCircle } from "lucide-react";

type StatusType = "pass" | "fail" | "error" | "not-executed";

interface StatusIconProps {
  status: StatusType;
  className?: string;
}

export function StatusIcon({ status, className = "h-4 w-4" }: StatusIconProps) {
  switch (status) {
    case "pass":
      return <CheckCircle className={`${className} text-green-500`} />;
    case "fail":
      return <XCircle className={`${className} text-red-500`} />;
    case "error":
      return <AlertCircle className={`${className} text-yellow-500`} />;
    default:
      return <MinusCircle className={`${className} text-gray-500`} />;
  }
}
