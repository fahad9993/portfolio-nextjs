import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { fullname, email, message } = await req.json();

  console.log("Full name: ", fullname);
  console.log("Email: ", email);
  console.log("Message: ", message);

  return NextResponse.json({ msg: ["Hi, from contact route.ts"] });
}
