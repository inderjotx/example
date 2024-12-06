import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 text-center">
        <Link className="text-2xl font-bold" href="/dashboard">
          Dashboard
        </Link>
        <Link className="text-2xl font-bold" href="/dashboard/table">
          Table
        </Link>
      </div>
    </div>
  );
}
