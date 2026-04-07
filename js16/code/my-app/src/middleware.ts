import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import withAuth from "./Middleware/withAuth/withAuth";

function middleware(request: NextRequest, event: NextFetchEvent) {
  return NextResponse.next();
}

export default withAuth(middleware, ["/profile", "/produk", "/about", "/admin"]);

export const config = {
  matcher: ["/profile", "/produk", "/about", "/admin"],
};