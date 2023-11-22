import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials, spreadsheetId } from "../googleConfig";

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

async function updateSheetData(rowIndex, rowData) {
  try {
    console.log(rowData);

    const range = `Investigación!B${rowIndex}:K${2 + rowIndex}`;
    const valueInputOption = "RAW";
    const rowBlank = "";

    const values = [
      [
        rowData.students,
        rowData.tesis,
        rowData.startDate,
        rowData.endDate,
        rowData.observations,
      ],
    ];

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: valueInputOption,
      resource: { values },
    });

    return response.data;
  } catch (error) {
    console.error("The API returned an error: " + error);
    throw error;
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();

    const { rowIndex, rowData } = body;

    const result = await updateSheetData(rowIndex, rowData);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error parsing JSON input: " + error.message },
      { status: 400 }
    );
  }
}
