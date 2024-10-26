import { NextResponse } from 'next/server';
import database from "@/utils/db";

const db = new database();

export async function POST(req) {
     const body = await req.json();
     const user = await db.get_password();
     console.log(user);
     console.log(body);
     
     
     if (user.username === body.username && user.password === body.password) {
          return NextResponse.json({ success: true, message: "Login successful" })
     } else {
          return NextResponse.json({ success: false, message: "Login failed" })
     }
}