import { NextResponse } from 'next/server';
import database from "@/utils/db";
import { v4 as uuid } from 'uuid';

const db = new database();

export async function POST(req) {
     const body = await req.json();
     const date = new Date();
     let time = date.getDate() + 3 
     const token = `${uuid()}#${time}`;
     const user = await db.get_password(token);
     if (user.username === body.username && user.password === body.password) {
          return NextResponse.json({ success: true, message: "Login successful" , token: token })
     } else {
          return NextResponse.json({ success: false, message: "Login failed" })
     }
}