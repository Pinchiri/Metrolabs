import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials, googleSheets, spreadsheetId } from "../../googleConfig";

async function updateSheetData(rowIndex, rowData) {
  try {
    const range = `Materiales!A${rowIndex}:K${2 + rowIndex}`;
    const valueInputOption = "RAW";
    const rowBlank = "";

    const values = [
      [
        rowBlank,
        rowData.material,
        rowData.capacity,
        rowData.brand,
        rowData.quantity,
        rowData.ubication,
        rowData.observations,
      ],
    ];

    const response = await googleSheets.spreadsheets.values.update({
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
