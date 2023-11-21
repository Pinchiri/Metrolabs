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
    const range = "Equipos!A4:K"; // Ajusta según tu rango necesario
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "1_-0ao8kLOr21E8BmrkSjEBMM3sKJvMp92yK8DYZWkO0",
      range: range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      throw new Error("No data found.");
    }

    // Procesa y devuelve los datos según sea necesario
    return rows.map((row) => {
      return {
        // Ajusta de acuerdo a tus columnas
        equipment: row[1],
        brand: row[2],
        model: row[3],
        quantity: row[4],
        ubication: row[5],
        userManual: row[6],
        frequency: row[7],
        date: row[8],
        observations: row[9],
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
