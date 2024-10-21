import { NextResponse } from "next/server";
import database from "@/utils/db";

const db = new database();
export async function GET(){ 
     //const messages = await db.get_messages();
     return NextResponse.json("messages");
}

export async function POST(req){
     const body = await req.json();
     const message = await db.add_message(body);
     return NextResponse.json("messages");
}