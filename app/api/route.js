import { NextResponse } from "next/server";
import database from "@/utils/db";

const db = new database();

export async function GET(){ 
     const info = await db.get_info();
     return NextResponse.json(info);
}