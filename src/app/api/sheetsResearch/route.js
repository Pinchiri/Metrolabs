import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials } from "../googleConfig";

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

async function getSheetData() {
  try {
    const range = "Investigación!B4:F";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "1_-0ao8kLOr21E8BmrkSjEBMM3sKJvMp92yK8DYZWkO0",
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

export async function GET(req) {
  try {
    const data = await getSheetData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error); // Log the error to the console
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
