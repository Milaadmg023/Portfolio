import { NextResponse } from "next/server";
import database from "@/utils/db";
import file_handler from "@/utils/file_handler";

const db = new database();

export const runtime = "edge";
export async function PUT(req) {
  const form = await req.formData();
  if (form.get("image")) {
    const file = await file_handler(form.get("image"));
  } else if (form.get("name") || form.get("job")) {
    const name = form.get("name")
    const job = form.get("job")
    const data = await db.update_base({ name : name, job : job });
  }
  return NextResponse.json({ message: "success" });
}
