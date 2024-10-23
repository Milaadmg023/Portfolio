import { NextResponse } from "next/server";
import database from "@/utils/db";
import file_handler from "@/utils/file_handler";

const db = new database();

export async function POST(req){
  const data = await req.json();
  const type = data.type;
  const info = data.info;
  try {
    console.log(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}

export async function PUT(req) {
  const form = await req.formData();
  if (form.get("image")) {
    const file = await file_handler(form.get("image"));
  } else if (form.get("name") || form.get("job")) {
    const name = form.get("name");
    const job = form.get("job");
    const data = await db.update_base({ name: name, job: job });
  }
  return NextResponse.json({ message: "success" });
}

export async function DELETE(req) {
  const data = await req.json();
  const type = data.type;
  const id = data.id;
  try {
    if (type === "project") {
      await db.delete_project(id);
    } else if (type === "skill") {
      await db.delete_skill(id);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
