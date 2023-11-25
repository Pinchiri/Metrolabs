import { NextResponse } from "next/server";
import { googleDrive } from "../googleConfig";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request) {
  try {
    const fileList = await googleDrive.files.list({
      q: "mimeType='application/pdf' and name contains 'Manual'",
    });

    const path = request.nextUrl.searchParams.get("path");
    if (path) {
      revalidatePath(path);
      return NextResponse.json(fileList.data, {
        revalidated: true,
        now: Date.now(),
        status: 200,
      });
    }

    return NextResponse.json(fileList.data, {
      revalidated: false,
      now: Date.now(),
      message: "Missing path to revalidate",
      status: 200,
    });
  } catch (error) {
    console.error(error); // Log the error to the console
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
