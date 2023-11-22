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
    const range = "Materiales!A4:G";
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
        material: row[1],
        capacity: row[2],
        brand: row[3],
        quantity: row[4],
        ubication: row[5],
        observations: row[6],
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
