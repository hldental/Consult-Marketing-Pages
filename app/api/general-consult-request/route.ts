import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  console.log("General consult lead:", payload);
  return NextResponse.redirect(new URL("/general-consult/thank-you", request.url), 303);
}
