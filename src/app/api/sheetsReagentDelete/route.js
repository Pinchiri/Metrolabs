import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials, spreadsheetId } from "../googleConfig";

// Configuración de autenticación
const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Función para eliminar una fila
async function deleteRow(rowIndex) {
  try {
    const requests = [
      {
        deleteDimension: {
          range: {
            sheetId: 0,
            dimension: "ROWS",
            startIndex: rowIndex - 1,
            endIndex: rowIndex,
          },
        },
      },
    ];

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: { requests },
    });
  } catch (error) {
    console.error("Error al eliminar la fila: " + error);
    throw error;
  }
}

// Función para manejar la solicitud DELETE
export async function POST(request) {
  try {
    const body = await request.json();
    const { rowIndex } = body;

    await deleteRow(rowIndex);

    return NextResponse.json(
      { message: "Fila eliminada con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud: " + error.message },
      { status: 400 }
    );
  }
}
