import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials } from "../googleConfig";

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

async function updateSheetData(body) {
  try {
    const range = `Horario de Clases!B:G`;
    body = body.formData;
    console.log(body);

    const values = [
      [
        body.className,
        body.professor,
        body.trimester,
        body.day,
        body.start,
        body.end,
      ],
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: "1_-0ao8kLOr21E8BmrkSjEBMM3sKJvMp92yK8DYZWkO0",
      range: range,
      valueInputOption: "USER_ENTERED",
      resource: { values },
    });

    return response;
  } catch (error) {
    console.error("The API returned an error: " + error);
    throw error;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const result = await updateSheetData(body);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error: " + error.message);
    return NextResponse.json(
      { error: "Error processing request: " + error.message },
      { status: 400 }
    );
  }
}
