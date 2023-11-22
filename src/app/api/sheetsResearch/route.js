import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials, spreadsheetId } from "../googleConfig";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

async function getSheetData() {
  try {
    const range = "Investigación!B4:F";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      throw new Error("No data found.");
    }

    // Se Procesan y se devuelven los datos según sea necesario
    return rows.map((row) => {
      return {
        // Se ajustan las columnas
        students: row[0],
        tesis: row[1],
        startDate: row[2],
        endDate: row[3],
        observations: row[4],
      };
    });
  } catch (error) {
    console.error("The API returned an error: " + error);
    throw error;
  }
}

export async function GET(request) {
  try {
    const data = await getSheetData();
    const path = request.nextUrl.searchParams.get("path");
    if (path) {
      revalidatePath(path);
      return NextResponse.json(data, {
        revalidated: true,
        now: Date.now(),
        status: 200,
      });
    }

    return NextResponse.json(data, {
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
