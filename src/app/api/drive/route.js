import { google } from "googleapis";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { credentials } from "../googleConfig";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

const drive = google.drive({ version: "v3", auth });

export async function GET(request) {
  try {
    const fileList = await drive.files.list({
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
