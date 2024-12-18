import { NextResponse } from "next/server";
import database from "@/utils/db";
import file_handler from "@/utils/file_handler";

const db = new database();

function formDataToObject(formData) {
  const obj = {};
  for (let [key, value] of formData.entries()) {
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

export async function POST(req) {
  const form = await req.formData();
  const type = form.get("type");
  try {
    if (type == "project") {
      const image = form.get("image");
      const iamge_path = await file_handler(image);
      const data = formDataToObject(form);
      data.image = iamge_path;
      await db.add_project(data);
    } else if (type == "skill") {
      const data = formDataToObject(form);
      await db.add_skill(data);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}

export async function PUT(req) {
  const form = await req.formData();
  if (form.get("image")) {
    const file = await file_handler(form.get("image"));
  } else {
    const name = form.get("name");
    const job = form.get("job");
    const username = form.get("username");
    const password = form.get("password");
    console.log(name, job, username, password);
    
    await db.update_base({ name: name, job: job, username: username, password: password });
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
