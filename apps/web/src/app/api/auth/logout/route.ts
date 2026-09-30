import { NextResponse } from "next/server";
import { buildLogoutCookieHeader } from "@/lib/auth";

export async function POST() {
  const res = NextResponse.json({ success: true, message: "Session successfully terminated" });
  res.headers.set("Set-Cookie", buildLogoutCookieHeader());
  return res;
}

export async function GET(req: Request) {
  const res = NextResponse.redirect(new URL("/login", req.url));
  res.headers.set("Set-Cookie", buildLogoutCookieHeader());
  return res;
}
