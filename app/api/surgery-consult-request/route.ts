import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  console.log("Surgery consult lead:", payload);
  return NextResponse.redirect(new URL("/surgery-consult/thank-you", request.url), 303);
}
