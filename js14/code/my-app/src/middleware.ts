import { NextResponse } from "next/server";
import withAuth from "./Middleware/withAuth";

export default withAuth(
  (req) => {
    return NextResponse.next();
  },
  ["/profile"]
);