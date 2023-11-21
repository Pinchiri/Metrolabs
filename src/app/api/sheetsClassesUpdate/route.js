import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials } from "../googleConfig";

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

async function updateSheetData(rowIndex, rowData) {
  try {
    const range = `Horario de Clases!B${rowIndex}:G${2 + rowIndex}`;
    const valueInputOption = "RAW";

    const values = [
      [
        rowData.className,
        rowData.professor,
        rowData.trimester,
        rowData.day,
        rowData.start,
        rowData.end,
      ],
    ];

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: "1_-0ao8kLOr21E8BmrkSjEBMM3sKJvMp92yK8DYZWkO0",
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

    console.log(rowData);
    console.log(rowIndex);

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
