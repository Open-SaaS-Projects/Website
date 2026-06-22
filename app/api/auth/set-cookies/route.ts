import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { accessToken, refreshToken } = await request.json();

    if (!accessToken) {
      return NextResponse.json({ error: "No access token" }, { status: 400 });
    }

    const response = NextResponse.json({ success: true });

    // Set httpOnly cookies
    response.cookies.set("sb-access-token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    if (refreshToken) {
      response.cookies.set("sb-refresh-token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
    }

    return response;
  } catch (error) {
    console.error("Set cookies error:", error);
    return NextResponse.json(
      { error: "Failed to set cookies" },
      { status: 500 }
    );
  }
}
