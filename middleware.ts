import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);

  // Allow login page through
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get("sb-access-token")?.value;

  // No token — redirect to login
  if (!accessToken) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Verify token and check email
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    }
  );

  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const allowedEmails = process.env.ADMIN_EMAIL?.toLowerCase()
    .split(",")
    .map((e) => e.trim()) || [];

  if (!allowedEmails.includes(user.email?.toLowerCase() || "")) {
    return NextResponse.redirect(
      new URL("/admin/login?error=unauthorized", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
