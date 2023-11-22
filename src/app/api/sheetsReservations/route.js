import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials } from "../googleConfig";
import { revalidatePath } from "next/cache";
import { sheetsReservationsURL } from "../routesURLs";
import { NextRequest } from "next/server";

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

async function getSheetData() {
  try {
    const range =
      "Uso de equipo o espacio: laboratorio de procesos de separación!A2:O";
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
        date: row[0],
        email: row[1],
        reason: row[2],
        studentFullName: row[3],
        DNI: row[4],
        studentCarnet: row[5],
        partnerName: row[6],
        partnerDNI: row[7],
        partnerCarnet: row[8],
        labName: row[9],
        useDate: row[10],
        tutorName: row[11],
        professorName: row[12],
        professorDepartment: row[13],
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
