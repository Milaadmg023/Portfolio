import { NextResponse } from "next/server";
import database from "@/utils/db";

const db = new database();

export async function POST(req) {
  const token = await req.json();
  if (!token) {
    return NextResponse.json({ success: false });
  }
  const time = new Date();
  const day = time.getDate();
  const token_expire = token.split("#")[1];
  const token_time = parseInt(token_expire);
  const isExpired = token_time < day;
  console.log(token_time, day);
  if (token_expire < day) {
    return NextResponse.json({ success: false });
  }

  const verify = await db.verfy_token(token);
  if (verify) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
