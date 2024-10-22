import { NextResponse } from "next/server";

export const runtime = "edge";
export async function PUT(req) {
  const form = await req.formData();
  return NextResponse.json({ message: "success" });
}
