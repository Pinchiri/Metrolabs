import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials, spreadsheetId } from "../../googleConfig";

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

async function updateSheetData(body) {
  try {
    const range = `Reactivos!B:K`;
    const values = [
      [
        body.formData.reactive,
        body.formData.formule,
        body.formData.cas,
        body.formData.brand,
        body.formData.concentration,
        body.formData.quantity,
        body.formData.risk,
        body.formData.ubication,
        body.formData.observations,
      ],
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: "USER_ENTERED",
      resource: { values },
    });

    return responses;
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
