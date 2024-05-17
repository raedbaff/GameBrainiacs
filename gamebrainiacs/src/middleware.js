import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
const user = "user";
export function middleware(request) {
  if (!user) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
