import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
class ExampleAPIError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "ExampleAPIError";
  }
}
// A faulty API route to test 's error monitoring
export function GET() {
  throw new ExampleAPIError("This error is raised on the backend called by the example page.");
  return NextResponse.json({ data: "Testing  Error..." });
}
